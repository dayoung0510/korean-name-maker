'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import Flex from '@/components/Flex';
import Typo from '@/components/Typo';
import Input from '@/components/Input';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Icon from '@/components/Icon';
import Button from '@/components/Button';
import { getCount, postName } from '@/apis';
import { useMutation, useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal';

type FormDataType = {
  names: { value: string }[];
  gender: string;
};

const AppPage = () => {
  const isMobile = useMediaQuery();

  const router = useRouter();

  const { control, handleSubmit, setValue } = useForm<FormDataType>({
    defaultValues: {
      names: [{ value: '' }, { value: '' }, { value: '' }],
      gender: 'M',
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'names',
  });

  const [modalOpen, setModalOpen] = useState(false);

  // input placeholder에 얹을 텍스트 만들기
  const getPlaceholder = (index: number) => {
    const placeholders = ['홍', '길할 길', '아이 동'];
    return placeholders[index] || placeholders[2];
  };

  // 플러스 클릭
  const handleAdd = () => {
    if (fields.length < 4) {
      append({ value: '' });
    }
  };

  // 휴지통 클릭
  const handleDelete = (index: number) => {
    if (index > 1) {
      remove(index);
    }
  };

  // 이름 제출
  const onSubmit = (formData: FormDataType) => {
    const result = formData.names
      .map((name) => name.value)
      .filter((i) => i !== '');

    if (!result[0]) {
      return alert('성을 입력해주세요.');
    } else if (!result[1]) {
      return alert('이름을 입력해주세요.');
    }

    if (result.length > 1 && !!formData.gender) {
      mutate(
        { names: result, gender: formData.gender === '남' ? 'M' : 'W' },
        {
          onSuccess: (data) => {
            router.push(`/result?id=${data.data.id}`);
          },
        },
      );
    }
  };

  // 방문자수 가져오기
  const { data } = useQuery({
    queryKey: ['count'],
    queryFn: () => {
      return getCount();
    },
  });

  // 이름데이터 담아 post 요청
  const { mutate } = useMutation({ mutationFn: postName });

  return (
    <Background $justify="center" $align="start">
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Flex $direction="column" $gap={{ row: 60 }}>
          <Flex $direction="column" $gap={{ row: 6 }}>
            <StyledTypo>{`우리말로\n이름을 불러줘`}</StyledTypo>
            <Typo $size={20}>한글날 기념 우리말 이름 짓기</Typo>
          </Flex>

          <Flex $direction="column" $gap={{ row: 21 }}>
            <Flex $direction="column" $gap={{ row: isMobile ? 10 : 20 }}>
              <Flex $direction="column" $gap={{ row: 10 }} $align="start">
                <Typo>내 이름*</Typo>
                <Flex
                  $direction={isMobile ? 'column' : 'row'}
                  $gap={{ column: 20, row: 10 }}
                >
                  {fields.map((field, index) => {
                    return (
                      <Controller
                        key={field.id}
                        name={`names.${index}.value`}
                        control={control}
                        render={({ field }) => (
                          <Flex
                            $gap={{ column: 10 }}
                            style={{ position: 'relative' }}
                          >
                            <Input
                              $width={isMobile ? 270 : 278}
                              {...field}
                              placeholder={getPlaceholder(index)}
                            />
                            {index === fields.length - 1 && index > 1 && (
                              <TrashDiv onClick={() => handleDelete(index)}>
                                <Icon name="trash" size={24} />
                              </TrashDiv>
                            )}
                          </Flex>
                        )}
                      />
                    );
                  })}
                </Flex>
              </Flex>

              {fields.length < 4 && (
                <Flex $gap={{ column: 8 }} onClick={handleAdd}>
                  <AddDiv>입력칸추가</AddDiv>
                  <Icon name="plus" size={18} />
                </Flex>
              )}
            </Flex>

            <Flex $direction="column" $gap={{ row: 10 }} $align="start">
              <Typo>성별</Typo>
              <Controller
                name={`gender`}
                control={control}
                render={({ field }) => (
                  <FakeSelectDiv>
                    <StyledSelect
                      defaultValue={'M'}
                      onChange={(e) => {
                        setValue('gender', e.target.value);
                      }}
                    >
                      <option value="M">남</option>
                      <option value="W">여</option>
                      <option value="N">공개안함</option>
                    </StyledSelect>
                  </FakeSelectDiv>
                )}
              />
            </Flex>
          </Flex>

          <Flex $direction="column" $gap={{ row: 20 }}>
            <Flex
              style={{ flexDirection: isMobile ? 'column-reverse' : 'row' }}
              $gap={{ row: 20, column: 20 }}
            >
              <Flex $direction="column" $gap={{ row: 10 }}>
                <Button
                  type="button"
                  variant="outlinedBlack"
                  onClick={() => setModalOpen(true)}
                >
                  이미 우리말 이름이에요
                </Button>
              </Flex>
              <Flex $direction="column" $gap={{ row: 10 }}>
                <Button type="submit" variant="fillBlack">
                  우리말 이름 짓기
                </Button>
                {isMobile && (
                  <Typo $size={isMobile ? 14 : 16}>
                    지금까지{' '}
                    {data?.data.count ? data?.data.count?.toLocaleString() : 0}
                    명이 함께 했어요.
                  </Typo>
                )}
              </Flex>
            </Flex>

            {!isMobile && (
              <Typo $size={isMobile ? 14 : 16}>
                지금까지{' '}
                {data?.data.count ? data?.data.count?.toLocaleString() : 0}
                명이 함께 했어요.
              </Typo>
            )}
          </Flex>
        </Flex>
      </form>
      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </Background>
  );
};

export default AppPage;

const Background = styled(Flex)`
  background-color: #f3f3f3;
  margin: 80px 0 120px 0;
`;

const StyledTypo = styled.p`
  font-family: 'Climate';
  line-height: 48px;
  font-size: 40px;
  text-align: center;
  white-space: pre-wrap;
  height: 106px;
`;

const AddDiv = styled.div`
  white-space: nowrap;
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;

const TrashDiv = styled(AddDiv)`
  position: absolute;
  right: -36px;
`;

const StyledSelect = styled.select`
  border: 0;
  width: 100%;
  outline: 0;

  appearance: none; /* 기본 스타일 제거 (웹킷 브라우저) */
  -webkit-appearance: none; /* iOS Safari 등에서 기본 화살표 제거 */
  -moz-appearance: none; /* Firefox에서 기본 스타일 제거 */
  background-color: transparent; /* 배경 투명하게 */
  font-size: 16px; /* 폰트 크기를 16px 이상으로 */
  color: #000;
`;
const FakeSelectDiv = styled.div`
  border-radius: 10px;
  padding: 14px 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 278px;

  ${({ theme }) => theme.device.mobile} {
    width: 270px;
  }
`;
