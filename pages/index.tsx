import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-start-1 row-start-1 col-span-2 row-span-1">
        <h1>森羅プロジェクトとは?</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-start-1 row-start-2 col-span-1 row-span-1">
        <h1>プロジェクト紹介動画</h1>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/aUsG9NCdtMQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-start-2 row-start-2 col-span-1 row-span-1">
        <h1>スケジュール</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-start-1 row-start-3 col-span-2 row-span-2 h-40">
        <h1>新着情報</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-start-3 row-start-1 col-span-1 row-span-3 h-40">
        <h1>リーダーボード</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
        <Link href="/data-format">
          <a>データ形式について</a>
        </Link>
        <Link href="/evaluation-method">
          <a>評価方法について</a>
        </Link>
      </div>
      <div className="col-start-3 row-start-4 col-span-1 row-span-1 h-40">
        <Link href="/data-download">
          <a>データダウンロードについて</a>
        </Link>
        <Link href="/result-submission">
          <a>結果の提出について</a>
        </Link>
      </div>
      <div className="col-start-1 row-start-5 col-span-2 row-span-2 h-40">
        <h1>森羅プロジェクト紹介</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-start-3 row-start-5 col-span-1 row-span-1 h-40">
        <h1>実行委員会</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-start-3 row-start-6 col-span-1 row-span-1 h-40">
        <h1>コミュニティ／連絡先</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1>タスク概要</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1>タスク詳細</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-3 row-span-1">
        <h1>システム制作の参考資料</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl px-1">システム制作実況チャンネル</h2>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/aUsG9NCdtMQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-xl px-1">ベースラインシステム等参考システム</h2>
            <div className="text-base border border-black box-border p-2">
              <p>概</p>
              <p>要</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1>関連研究</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1>タスク参加についてのFAQ</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
      <div className="col-span-3 row-span-1 h-40">
        <h1 className="text-xl">過去の共有タスク</h1>
        <div className="text-base border border-black box-border p-2">
          <p>概</p>
          <p>要</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
