import React from 'react';
import { Layout } from 'components/Layout';
import { TodoPresenter } from 'pages/todo';
interface IAppProps {
  setTheme: Function;
}
const App: React.FC<IAppProps> = ({ setTheme }) => {
  return (
    <Layout setTheme={setTheme}>
      <TodoPresenter />
    </Layout>
  );
};

export default App;
