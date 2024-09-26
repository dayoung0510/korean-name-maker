'use client';

import styled from 'styled-components';
import Flex from '@/components/Flex';
import Typo from '@/components/Typo';
import Input from '@/components/Input';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import Icon from '@/components/Icon';
import Button from '@/components/Button';

const AppPage = () => {
  const isMobile = useMediaQuery();

  const { control, handleSubmit } = useForm({
    defaultValues: { user: [{ value: '' }, { value: '' }, { value: '' }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'user',
  });

  const getPlaceholder = (index: number) => {
    const placeholders = ['홍', '길할 길', '아이 동'];
    return placeholders[index] || placeholders[2];
  };

  const handleAdd = () => {
    if (fields.length < 4) {
      append({ value: '' });
    }
  };

  const handleDelete = (index: number) => {
    if (index > 1) {
      remove(index);
    }
  };

  const onSubmit = (formData: { user: { value: string }[] }) => {
    const result = formData.user.map((name) => name.value);
    console.log(result);
  };

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
                        name={`user.${index}.value`}
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
              <Input placeholder="남/여" $width={isMobile ? 270 : 278} />
            </Flex>
          </Flex>

          <Flex $direction="column" $gap={{ row: 20 }}>
            <Flex
              $direction={isMobile ? 'column' : 'row'}
              $gap={{ row: 20, column: 20 }}
            >
              <Flex $direction="column" $gap={{ row: 10 }}>
                <Button variant="outlinedBlack">이미 우리말 이름이에요</Button>
                {isMobile && (
                  <Typo $size={14}>지금까지 nn명이 함께 했어요.</Typo>
                )}
              </Flex>
              <Button variant="fillBlack">우리말 이름 짓기</Button>
            </Flex>

            {!isMobile && <Typo>지금까지 nn명이 함께 했어요.</Typo>}
          </Flex>
        </Flex>
      </form>
    </Background>
  );
};

export default AppPage;

const Background = styled(Flex)`
  background-color: #f3f3f3;
  height: 100%;
  margin: 160px 0;
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
