import React, { useState } from 'react';
import { Steps, Button } from 'antd';

const CardSteps: React.FC = () => {
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
            title: '连线',
            // 子标题
            // subTitle: 'subTitle1',
            description: (
              <>
                {/* draw icon */}
                <Button>开始</Button>
                {/* finish icon */}
                <Button>结束</Button>
                {/* clear icon */}
                <Button>重置</Button>
              </>
            ),
            // 指定状态
            // status: 'wait',
            // status: 'process',
            // status: 'finish',
            // status: 'error',
          },
          {
            title: '图标',
            // subTitle: 'subTitle2',
            description: (
              <>
                {/* draw icon */}
                <Button>设置</Button>
                {/* clear icon */}
                <Button>重置</Button>
              </>
            ),
          },
          {
            title: '完成',
            // subTitle: 'subTitle3',
            description: (
              <>
                <Button>保存</Button>
                <Button>取消</Button>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default CardSteps;
