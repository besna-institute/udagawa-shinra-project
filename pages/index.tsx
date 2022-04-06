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
      <div className="col-start-1 row-start-2 col-span-1 row-span-1">
        <h1 className="text-xl">プロジェクト紹介動画</h1>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/ZRJhlIEivRU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-start-2 row-start-2 col-span-1 row-span-1">
        <h1 className="text-xl">スケジュール</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-start-1 row-start-3 col-span-2 row-span-2 h-40">
        <h1 className="text-xl">新着情報</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-start-3 row-start-1 col-span-1 row-span-3 h-40">
        <h1 className="text-xl">リーダーボード</h1>
        <p className="text-base border border-black box-border px-1">
          リーダーボード
        </p>
        <Link href="/data-format">
          <a className="text-xl font-medium underline px-1">
            データ形式について
          </a>
        </Link>
        <Link href="/evaluation-method">
          <a className="text-xl font-medium underline px-1">評価方法について</a>
        </Link>
      </div>
      <div className="col-start-3 row-start-4 col-span-1 row-span-1 h-40">
        <Link href="/data-download">
          <a className="text-xl font-medium underline px-1">
            データダウンロードについて
          </a>
        </Link>
        <Link href="/result-submission">
          <a className="text-xl font-medium underline px-1">
            結果の提出について
          </a>
        </Link>
      </div>
      <div className="col-start-1 row-start-5 col-span-2 row-span-2 h-40">
        <h1 className="text-xl">森羅プロジェクト紹介</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-start-3 row-start-5 col-span-1 row-span-1 h-40">
        <h1 className="text-xl">実行委員会</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-start-3 row-start-6 col-span-1 row-span-1 h-40">
        <h1 className="text-xl">コミュニティ／連絡先</h1>
        <p className="text-base px-1">概要</p>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1 className="text-xl">タスク概要</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1 className="text-xl">タスク詳細</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-span-3 row-span-1">
        <h1 className="text-xl">システム制作の参考資料</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl px-1">システム制作実況チャンネル</h2>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/ZRJhlIEivRU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-xl px-1">ベースラインシステム等参考システム</h2>
            <p className="text-base border border-black box-border px-1">
              概要
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1 className="text-xl">関連研究</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1 className="text-xl">タスク参加についてのFAQ</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1 className="text-xl">過去の共有タスク</h1>
        <p className="text-base border border-black box-border px-1">概要</p>
      </div>
    </div>
  );
};

export default Home;
