import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 row-span-1 col-span-2 row-span-1 h-40">
        <h1 className="text-xl">森羅プロジェクトとは?</h1>
        <p className="text-base border border-black box-border px-1">
          森羅プロジェクトとは...
        </p>
      </div>
      <div className="col-start-1 row-start-2 col-span-1 row-span-1 h-40">
        <h1 className="text-xl">プロジェクト紹介動画</h1>
        <p className="text-base border border-black box-border px-1">
          video.url
        </p>
      </div>
      <div className="col-start-2 row-start-2 col-span-1 row-span-1 h-40">
        <h1 className="text-xl">スケジュール</h1>
        <p className="text-base border border-black box-border px-1">
          schedule.content
        </p>
      </div>
      <div className="col-start-1 row-start-3 col-span-2 row-span-2 h-40">
        <h1 className="text-xl">新着情報</h1>
        <p className="text-base border border-black box-border px-1">
          update.content
        </p>
      </div>
      <div className="col-start-3 row-start-1 col-span-1 row-span-3 h-40">
        <h1 className="text-xl">リーダーボード</h1>
        <p className="text-base border border-black box-border px-1">
          リーダーボード
        </p>
        <Link href="/data-format">
          <a className="text-3xl font-medium underline">データ形式について</a>
        </Link>
        <Link href="/evaluation-method">
          <a className="text-3xl font-medium underline">評価方法について</a>
        </Link>
      </div>
      <div className="col-start-3 row-start-4 col-span-1 row-span-1 h-40">
        <Link href="/data-download">
          <a className="text-3xl font-medium underline">
            データダウンロードについて
          </a>
        </Link>
        <Link href="/result-submission">
          <a className="text-3xl font-medium underline">結果の提出について</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
