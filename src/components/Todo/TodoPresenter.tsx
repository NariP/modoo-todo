import styled from 'styled-components';

interface ITodoPresenter {
  //
}

const TodoPresenter: React.FC<ITodoPresenter> = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Header>
          <Form>
            <Input />
          </Form>
          <Btn>
            <i className="fas fa-plus"></i>
          </Btn>
        </Header>
        <Body>
          <Row>
            <ItemWrapper>
              <Checkbox></Checkbox>
              <Item>수영</Item>
            </ItemWrapper>
            <DeleteBtn>
              <i className="fas fa-trash-alt"></i>
            </DeleteBtn>
          </Row>
        </Body>
      </SubWrapper>
    </Wrapper>
  );
};

export default TodoPresenter;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SubWrapper = styled.div`
  width: 700px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  padding: 70px;
  background-color: #81c784;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-right: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 33px;
  padding-left: 20px;
`;

const Body = styled.div`
  height: 800px;
  border: 5px solid #80c683;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  font-size: 18px;
`;

const Btn = styled.button`
  width: 80px;
  font-size: 33px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: #b1f9b3;
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

const DeleteBtn = styled.button`
  font-size: 22px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.2);
  }
`;

const Checkbox = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid gray;
  background-color: transparent;
  margin-right: 25px;
  cursor: pointer;
`;
