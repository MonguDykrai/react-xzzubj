import React, { useState } from 'react';
import './index.css';
import { Steps } from 'antd';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('value:', value);
    console.log('onChange:', current);
    setCurrent(value);
  };
  const description = 'This is a description.';

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            // 标题
            title: 'Step 1',
            // 子标题
            subTitle: 'subTitle1',
            description,
            // 指定状态
            // status: 'wait',
            // status: 'process',
            // status: 'finish',
            status: 'error',
          },
          {
            title: 'Step 2',
            subTitle: 'subTitle2',
            description,
          },
          {
            title: 'Step 3',
            subTitle: 'subTitle3',
            description,
          },
        ]}
      />
    </>
  );
};

export default App;

// ['wait', 'process', 'finish', 'error'];
