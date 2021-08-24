import React from 'react';
import { Layout } from 'components/Layout';
import { TodoContainer } from 'pages/Todo';
interface IAppProps {
  setTheme: Function;
}
const App: React.FC<IAppProps> = ({ setTheme }) => {
  return (
    <Layout setTheme={setTheme}>
      <TodoContainer />
    </Layout>
  );
};

export default App;
