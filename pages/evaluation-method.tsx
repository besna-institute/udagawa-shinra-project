import type { NextPage } from "next";

const EvaluationMethod: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="col-span-1 row-span-1">
        <h1>評価方法</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <h1>End-to-endタスクの評価方法</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <h1>分類タスクの評価方法</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <h1>属性抽出タスクの評価方法</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <h1>リンクタスクの評価方法</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <h1>評価方法についてのFAQ</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
    </div>
  );
};

export default EvaluationMethod;
