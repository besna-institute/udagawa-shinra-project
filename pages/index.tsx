/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import {
  CommitteeList,
  ContentBox,
  MediaBox,
  JoinButton,
  NavigationLink,
  SingleLineList,
  ScheduleList,
} from "../components";
import { useRef, useEffect, useState } from "react";
import { Paper, Divider } from "@mui/material";
import Link from "next/link";

const newsItems = [
  <>
    森羅2022
    <a
      href="http://shinra-project.info/shinra2022-kickoff-meeting/"
      target="_blank"
      rel="noreferrer"
    >
      キックオフミーティング
    </a>
    を開催しました。タスク参加は
    <a href="http://2022.shinra-project.info/join">こちら</a>
    からどうぞ。(2022/5/12)
  </>,
  <>
    言語処理学会第28回年次大会(NLP2022)で森羅プロジェクトの
    <a href="https://drive.google.com/file/d/1fHXpMsTc1AMu19aDGzIHz6GLKJbRJMae/view?usp=sharing">
      発表
    </a>
    を行い、委員特別賞を
    <a href="http://shinra-project.info/wp-content/uploads/sites/8/2022/03/委員特別賞.png">
      受賞
    </a>
    しました。(2022/3/18)
  </>,
  <>
    <span>
      森羅プロジェクトが英国の雑誌Impactの
      <a href="http://shinra-project.info/wp-content/uploads/sites/8/2022/02/Impact-publication.pdf">
        記事
      </a>
      として取り上げられました。どうぞご覧ください。(2022/2/24)
    </span>
  </>,
  <>
    森羅2021の最終報告会(12月20日)にご参加いただき、ありがとうございました。資料を
    <a href="http://shinra-project.info/shinra2021-final-report-meeting/">
      最終報告会ページ
    </a>
    に掲載していますので、どうぞご覧ください。(2021/12/24)
  </>,
  <>
    LinkJPタスクの
    <a href="https://drive.google.com/file/d/1Lqy480YwG8SbTWz56I_w6IKEw421n5IM/view?usp=sharing">
      テストデータ正解
    </a>
    を公開しました。(2021/11/15)
  </>,
  <>
    MLタスクの実行結果の提出〆切を11月15日に延長しました。ぜひタスク参加をご検討下さい。(2021/10/4)
  </>,
  <>
    LinkJPタスクの
    <a href="https://drive.google.com/file/d/1iEciat50vSaGJ9d9FQz20k8eRt2mMGN7/view?usp=sharing">
      テストデータ
    </a>
    を公開しました。
    <a href="http://shinra-project.info/shinra2021linkjp/result_submission/">
      実行結果提出
    </a>
    の締切は9月30日です。(2021/9/10)
  </>,
  <>
    森羅プロジェクトの紹介ビデオを公開しました（[
    <a href="https://www.youtube.com/watch?v=lCYj3x6pu1w">日本語版</a>][
    <a href="https://www.youtube.com/watch?v=yQ2xeq7rbeU">英語版</a>
    ])。（2021/6/30）
  </>,
];
const mainRelatedResearch = [
  <>
    [<span id="sekine2022">Sekine2022</span>] 関根聡, 中山功太, 野本昌子,
    安藤まや, 隅田飛鳥, 松田耕史,
    <br />
    拡張固有表現に分類された31言語のWikipedia知識ベース,
    言語処理学会第28回年次大会発表論文集, 2022. [
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/E1-1.pdf">
      paper
    </a>
    ] [
    <a href="https://drive.google.com/file/d/1fHXpMsTc1AMu19aDGzIHz6GLKJbRJMae/view?usp=sharing">
      slide
    </a>
    ]
  </>,
  <>
    [<span id="nomoto2022">Nomoto2022</span>] 野本昌子, 宇佐美佑, 安藤まや,
    中山功太, 関根聡,
    <br />
    森羅2021-LinkJP結果の分析:BERTとルールベースの比較,
    言語処理学会第28回年次大会発表論文集, 2022. [
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2022/pdf_dir/E2-4.pdf">
      paper
    </a>
    ] [
    <a href="https://drive.google.com/file/d/1cVonFj5PZ8H-1C2aX2WX3C4BWYzYiMH8/view?usp=sharing">
      slide
    </a>
    ]
  </>,
  <>
    [<span id="sekine2021b">Sekine2021b</span>] Satoshi Sekine, Kouta Nakayama,
    Maya Ando, Yu Usami, Masako Nomoto and Koji Matsuda,
    <br />
    <a href="https://www.akbc.ws/2021/assets/pdfs/6xhX4nnBhbJ.pdf">
      SHINRA2020-ML: Categorizing 30-language Wikipedia into fine-grained NE
      based on “Resource by Collaborative Contribution” scheme
    </a>
    , In Proceedings of the 3rd conference on the Automated Knowledge Base
    Construction (AKBC 2021), 2021.
  </>,
  <>
    [<span id="nakayama2021a">Nakayama2021a</span>] 中山功太, 栗田修平,
    馬場雪乃, 関根聡, <br />
    能動的サンプリングを用いたリソース構築共有タスクにおける予測対象データ削減,
    言語処理学会第27回年次大会発表論文集, pp.1187-1192, 2021. [
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/P6-15.pdf">
      paper
    </a>
    ] [
    <a href="https://drive.google.com/file/d/1uUlWjDIM-q_3OL9ZIiYb-3fes0eScRTJ/view?usp=sharing">
      poster
    </a>
    ]
  </>,
  <>
    [<span id="sekine2021a">Sekine2021a</span>] 関根聡, 野本昌子, 中山功太,
    隅田飛鳥, 松田耕史, 安藤まや,
    <br />
    SHINRA2020-ML:30 言語の Wikipedia ページの分類,
    言語処理学会第27回年次大会発表論文集, pp.563-568, 2021. [
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2021/pdf_dir/P3-11.pdf">
      paper
    </a>
    ][
    <a href="https://drive.google.com/file/d/1jz3uX0et7fkt7QDLt2bNR6J7dqyC_aea/view?usp=sharing">
      poster
    </a>
    ]
  </>,
  <>
    [<span id="sekine2020b">Sekine2020b</span>] Satoshi Sekine, Masako Nomoto,
    Kouta Nakayama, Asuka Sumida, Koji Matsuda, and Maya Ando,
    <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/01-NTCIR15-OV-SHINRA-SekineS.pdf">
      Overview of SHINRA2020-ML Task
    </a>
    , In Proceedings of the NTCIR-15 Conference.[
    <a href="https://drive.google.com/file/d/1VAHieaVKUOsHsuNEebk7zKD3DuYhck8z/view?usp=sharing">
      slide
    </a>
    ], [
    <a href="https://drive.google.com/file/d/1VVuCV-hfnxzM3NE2NAT0JwHT0RYj2gnp/view?usp=sharing">
      poster
    </a>
    ]
  </>,
  <>
    [<span id="bui2020">Bui2020</span>] The Viet Bui and Phuong Le-Hong, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/02-NTCIR15-SHINRA-BuiT.pdf">
      Cross-lingual Extended Named Entity Classification of Wikipedia Articles
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="cardoso2020">Cardoso2020</span>] Rúben Cardoso, Afonso Mendes and
    Andre Lamurias, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/03-NTCIR15-SHINRA-CardosoR.pdf">
      Priberam Labs at the NTCIR-15 SHINRA2020-ML: Classification Task
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="abhishek2020">Abhishek2020</span>] Tushar Abhishek, Ayush
    Agarwal, Anubhav Sharma, Vasudeva Varma and Manish Gupta, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/04-NTCIR15-SHINRA-AbhishekT.pdf">
      Rehoboam at the NTCIR-15 SHINRA2020-ML Task
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="yoshikawa2020">Yoshikawa2020</span>] Hiyori Yoshikawa, Chunpeng
    Ma, Aili Shen, Qian Sun, Chenbang Huang, Guillaume Pelat, Akiva Miura,
    Daniel Beck, Timothy Baldwin and Tomoya Iwakura, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/05-NTCIR15-SHINRA-YoshikawaH.pdf">
      UOM-FJ at the NTCIR-15 SHINRA2020-ML Task
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="nakayama2020b">Nakayama2020b</span>] Kouta Nakayama and Satoshi
    Sekine, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/06-NTCIR15-SHINRA-NakayamaK.pdf">
      LIAT Team’s Wikipedia Classifier at NTCIR-15 SHINRA2020-ML: Classification
      Task
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="yoshioka2020">Yoshioka2020</span>] Masaharu Yoshioka and Yoshiaki
    Koitabashi, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/07-NTCIR15-SHINRA-YoshiokaM.pdf">
      HUKB at SHINRA2020-ML task
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="nishikawa2020">Nishikawa2020</span>] Sosuke Nishikawa and Ikuya
    Yamada, <br />
    <a href="http://research.nii.ac.jp/ntcir/workshop/OnlineProceedings15/pdf/ntcir/08-NTCIR15-SHINRA-NishikawaS.pdf">
      Studio Ousia at the NTCIR-15 SHINRA2020-ML Task
    </a>
    , In Proceedings of the NTCIR-15 Conference.
  </>,
  <>
    [<span id="nakayama2020a">Nakayama2020a</span>] 中山功太, 栗田修平,
    小林暁雄, 関根聡,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/F1-4.pdf">
      Pre-Distillation Ensemble:リソース構築タスクのためのアンサンブル手法
    </a>
    , 言語処理学会第26回年次大会発表論文集, pp.375-378, 2020.
  </>,
  <>
    [<span id="kobayashi2020">Kobayashi2020</span>] 小林暁雄, 中山功太,
    安藤まや, 関根聡,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/F4-2.pdf">
      Wikipedia構造化プロジェクト「森羅2019-JP」
    </a>
    , 言語処理学会第26回年次大会発表論文集, pp.1029-1032, 2020.
  </>,
  <>
    [<span id="sekine2020a">Sekine2020a</span>] 関根聡, 安藤まや, 小林暁雄,
    隅田飛鳥,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2020/pdf_dir/P5-13.pdf">
      拡張固有表現定義の更新と日本語Wikipedia分類データ2019
    </a>
    , 言語処理学会第26回年次大会発表論文集, pp.1221-1224, 2020.
  </>,
  <>
    [<span id="sekine2019b">Sekine2019b</span>] Satoshi Sekine, Akio Kobayashi,
    Kouta Nakayama,
    <br />
    <a href="https://openreview.net/pdf?id=HygfXWqTpm">
      SHINRA: Structuring Wikipedia by Collaborative Contribution
    </a>
    , In Proceedings of the 1st conference on the Automated Knowledge Base
    Construction (AKBC 2019), 2019.
  </>,
  <>
    [<span id="sekine2019a">Sekine2019a</span>] 関根聡, 小林暁雄, 安藤まや,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2019/pdf_dir/E1-2.pdf">
      Wikipedia構造化プロジェクト「森羅2018」
    </a>
    ,言語処理学会第25回年次大会発表論文集, pp.69-72, 2019.
  </>,
  <>
    [<span id="kobayashi2019">Kobayashi2019</span>] 小林暁雄, 中山功太, 関根聡,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2019/pdf_dir/P3-7.pdf">
      森羅:Wikipedia構造化プロジェクト2018結果の分析と考察
    </a>
    , 言語処理学会第25回年次大会発表論文集, pp.538-541, 2019.
  </>,
  <>
    [<span id="hentona2019">Hentona2019</span>] 邊土名朝飛, 野中尋史, 小林暁雄,
    関根聡,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2019/pdf_dir/B4-8.pdf">
      外部知識源を使用したWikipediaからの化合物情報抽出
    </a>
    , 言語処理学会第25回年次大会発表論文集, pp.791-794, 2019.
  </>,
  <>
    [<span id="nakayama2019">Nakayama2019</span>] 中山功太, 小林暁雄, 関根聡,
    <br />
    <a href="https://www.anlp.jp/proceedings/annual_meeting/2019/pdf_dir/E6-5.pdf">
      共有タスクにおけるGA重み付け加重投票を用いた属性値アンサンブル
    </a>
    , 言語処理学会第25回年次大会発表論文集, pp.1547-1550, 2019.
  </>,
];
const otherRelatedResearch = [
  <>
    [<span id="suzuki2018">Suzuki2018</span>] Masatoshi SUZUKI, Koji MATSUDA,
    Satoshi SEKINE, Naoaki OKAZAKI and Kentaro INUI, <br />
    <a href="https://www.jstage.jst.go.jp/article/transinf/E101.D/1/E101.D_2017SWP0005/_article">
      A Joint Neural Model for Fine-Grained Named Entity Classification of
      Wikipedia Articles
    </a>
    ‘, IEICE Transactions on Information and Systems, E101.D-1, pp.73-81, 2018.
  </>,
  <>
    [<span id="sekine2018">Sekine2018</span>] 関根聡, 安藤まや, 小林暁雄,
    松田耕史, 鈴木正敏, Duc Nguyen, 乾健太郎,
    <br />
    <a href="https://anlp.jp/proceedings/annual_meeting/2018/pdf_dir/P4-5.pdf">
      「拡張固有表現＋Wikipedia」データ（2015 年 11 月版
      Wikipedia分類作業完成版）
    </a>
    , 言語処理学会第24回年次大会発表論文集, pp.504-507, 2018.
  </>,
  <>
    [<span id="sekine2002">Sekine2002</span>] Satoshi Sekine, Kiyoshi Sudo, and
    Chikashi Nobata,
    <br />
    <a href="http://www.lrec-conf.org/proceedings/lrec2002/pdf/120.pdf">
      Extended Named Entity Hierarchy
    </a>
    . In Proceedings of the Third International Conference on Language Resources
    and Evaluation (LREC’02), 2002.
  </>,
  <>
    [<span id="sekine2000">Sekine2000</span>] Satoshi Sekine and Yoshio
    Eriguchi,
    <br />
    <a href="https://www.aclweb.org/anthology/C00-2167.pdf">
      Japanese Named Entity Extraction Evaluation – Analysis of Results –
    </a>
    , In Proceedings of the 18th International Conference on Computational
    Linguistics (COLING’00), vol.2, pp.1106-110,
    <br />
    2000.
  </>,
  <>
    [<span id="grishman1996">Grishman1996</span>] Ralph Grishman and Beth
    Sundheim,
    <br />
    <a href="https://www.aclweb.org/anthology/C96-1079.pdf">
      Message Understanding Conference – 6: A Brief History
    </a>
    , In Proceedings of the 16th conference on Computational linguistics
    (COLING’96), vol.1, pp.466-471, 1996.
  </>,
];

const Home: NextPage = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(2500);

  useEffect(() => {
    if (leftRef.current) {
      const left = leftRef.current.getBoundingClientRect();
      if (left.height > maxHeight) {
        setMaxHeight(left.height);
      }
    }
  }, [maxHeight]);
  return (
    <Paper
      elevation={0}
      style={{
        gridGap: "1rem",
        gridTemplate: `
          "top-left         top-right"
          "leader-board     leader-board"
          "mid-content-left mid-content-right"
          "divider1         divider1"
          "task-detail      task-detail"
          "faq              faq"
          "task-list        task-list" / minmax(0, 4fr) minmax(0, 3fr)
        `,
        display: "grid",
      }}
    >
      <Divider
        sx={{
          borderColor: "#afafaf",
          gridArea: "divider1",
        }}
      />
      <div
        style={{
          alignItems: "center",
          display: "grid",
          gridArea: "top-left",
          gridGap: "1rem",
          gridTemplate: `
            "about" max-content
            "shinra-video" max-content
            "." auto
          `,
        }}
      >
        <ContentBox
          style={{
            gridArea: "about",
          }}
          theme="white"
        >
          <h2 id="about">2022年度の森羅プロジェクトは？</h2>
          <p>
            2022年度の森羅プロジェクト（森羅2022）では、協働による知識の構造化を目指し、Wikipediaの分類、属性値抽出、リンキングタスクを実施します。
          </p>
          <h1 style={{ textAlign: "center" }}>
            タスク参加は<a href="join">こちら</a>&#xFF01;
          </h1>
        </ContentBox>
        <MediaBox
          width={16}
          height={9}
          style={{
            gridArea: "shinra-video",
            margin: "1.5rem 0 0.75rem 0",
          }}
          isYouTube
        >
          <iframe
            width={649}
            height={365}
            loading="lazy"
            src="https://www.youtube.com/embed/lCYj3x6pu1w"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </MediaBox>
      </div>
      <div
        style={{
          display: "grid",
          gridArea: "top-right",
          gridTemplate: `
            "whatsnew" auto
            "ch" max-content
          `,
          gridGap: "1rem",
        }}
      >
        <ContentBox
          style={{
            gridArea: "whatsnew",
            overflow: "auto",
            maxHeight: "20rem",
          }}
          theme="green"
        >
          <h2 id="whatsnew">新着情報</h2>
          <SingleLineList items={newsItems} divider disablePadding />
        </ContentBox>
        <ContentBox
          style={{
            display: "grid",
            gridArea: "ch",
            gridGap: "1rem",
            gridTemplate: `
              "intro"
              "video1"
            `,
            // gridTemplate: `
            //   "intro intro"
            //   "video1 video2" / 1fr 1fr
            // `,
          }}
          theme="gray"
        >
          <div style={{ gridArea: "intro", gridColumn: "span 3" }}>
            <h2>森羅チャンネル</h2>
            <p>今後も動画を公開していきます。チャンネル登録お願いします。</p>
          </div>
          <div
            style={{
              gridArea: "video1",
              width: "50%",
              margin: "0 auto",
            }}
          >
            <h3>インタビュー</h3>
            <a
              target="_blank"
              href="https://www.youtube.com/playlist?list=PLtIaKdagvnZBkflzf048KoYGydIy6yhMd"
              rel="noopener noreferrer"
            >
              <MediaBox width={1300} height={731}>
                <img
                  loading="lazy"
                  alt="thumbnail-interview"
                  src="/thumbnail-interview.png"
                  style={{
                    margin: 0,
                  }}
                />
              </MediaBox>
            </a>
          </div>
          {/* <div
            style={{
              gridArea: "video2",
            }}
          >
            <h3>システム制作実況</h3>
            <MediaBox width={16} height={9} isYouTube>
              <iframe
                src="https://www.youtube.com/embed/lCYj3x6pu1w"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </MediaBox>
          </div> */}
        </ContentBox>
      </div>
      <ContentBox
        style={{
          gridArea: "leader-board",
          gridColumn: "span 2",
        }}
        theme="white"
      >
        <iframe
          loading="lazy"
          id="leaderboard"
          src="https://leaderboard2022.shinra-project.info/leaderboard/"
        />
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          <NavigationLink href="/data-format">
            データ形式について
          </NavigationLink>
          <NavigationLink href="/evaluation-method">
            評価方法について
          </NavigationLink>
          <NavigationLink href="/data-download">
            データダウンロードについて
          </NavigationLink>
          <NavigationLink href="/result-submission">
            結果の提出について
          </NavigationLink>
        </div>
      </ContentBox>
      <div
        ref={leftRef}
        id="mid-content-left"
        style={{
          gridArea: "mid-content-left",
          display: "grid",
          rowGap: "2rem",
          gridTemplate: `
            "introduction" max-content
            "divider1" max-content
            "overview" max-content
          `,
        }}
      >
        <ContentBox
          style={{
            gridArea: "introduction",
          }}
          theme="white"
        >
          <h2 id="introduction">森羅プロジェクト紹介</h2>
          <p>
            森羅プロジェクトは、
            Wikipediaに書かれている世界知識を計算機が扱えるような形に変換することを目的として、Wikipediaを構造化するプロジェクトです。私達は、名前のオントロジーである「
            <a href="http://ene-project.info/">拡張固有表現（ENE）</a>
            」にWikipediaの記事を分類し、拡張固有表現に定義されている属性情報をWikipedia記事にアノテーションし、対象Wikipediaページにリンクすることで、計算機利用可能な知識の構造化を目指しています。
          </p>
          <p>構造化は３段階のステップにわけられます。</p>
          <ol>
            <li>
              <strong>Wikipedia項目のENEへの分類</strong>
              <br />
              <em>（例：「島崎藤村」ページを「人名」に分類）</em>
            </li>
            <li>
              <strong>ENEで定義された属性に対応する属性値を抽出</strong>
              <br />
              <em>
                （例：「人名」の「作品」という属性に対応する「嵐」を属性値として抽出）
              </em>
            </li>
            <li>
              <strong>属性値を、それに対応するWikipediaページに紐づけ</strong>
              <br />
              <em>
                （例：属性値「嵐」をWikipediaページの「嵐（小説）」に紐づけ）
              </em>
            </li>
          </ol>
          <p>
            森羅プロジェクトは、様々なアプローチによる多数のシステムを評価型ワークショップを開催することで募り、それらを統合することで構造化データを構築する「Resource
            by Collaborative
            Contribution（協働による知識構築）」の考えに基づくプロジェクトです。
          </p>
        </ContentBox>
        <Divider
          style={{
            borderColor: "#afafaf",
            gridArea: "divider1",
          }}
        />
        <ContentBox
          style={{
            gridArea: "overview",
          }}
          theme="white"
        >
          <h2 id="overview">タスク概要</h2>
          <MediaBox width={921} height={436}>
            <img
              loading="lazy"
              src="/shinra2022-fig1.png"
              alt="shinra2022-fig1"
            />
          </MediaBox>
          <p>
            <a href="http://shinra-project.info/?lang=ja">森羅プロジェクト</a>
            は2017年にスタートしたリソース構築プロジェクトで、人が読むことを想定して書かれたWikipediaの知識を計算機が扱える形に
            <a href="#structuring_wikipedia">構造化</a>
            することを目指し、「協働によるリソース構築（Resource by
            Collaborative
            Contribution（RbCC））」という枠組みで、評価型タスクとリソース構築を同時に進めています。
          </p>
          <MediaBox width={846} height={429}>
            <img
              loading="lazy"
              src="/shinra2022-fig2.png"
              alt="shinra2022-fig2"
            />
          </MediaBox>
          <p>
            日本語構造化タスクは森羅プロジェクトで2018年から実施している日本語Wikipediaを対象とした情報抽出タスクで、今回が4回目となります。
          </p>
          <p>
            森羅2022ではこれまでの森羅プロジェクトのタスクを統合したEnd-to-Endタスクと、その構成要素となる3つのサブタスクを開催し、参加者を募集します。
          </p>
          <p>
            End-to-Endタスクでは、以下の3つのステップを一気に実施することで、分類、属性抽出、リンクの複合タスクを実現し、相乗効果／End-to-Endで精度向上の可能性を探ります。
          </p>
          <MediaBox width={893} height={460}>
            <img src="/shinra2022-fig3.png" alt="shinra2022-fig3" />
          </MediaBox>
          <p>
            End-to-Endタスクの各ステップは過去の森羅プロジェクトと以下の関係にあります。
          </p>
          <ul>
            <li>
              <strong>ステップ1（分類）</strong>
              <ul>
                <li>
                  日本語の分類システム（今回は30言語の分類は実施しません）
                </li>
              </ul>
            </li>
            <li>
              <strong>ステップ2（属性値抽出）</strong>
              <ul>
                <li>日本語の属性値抽出：森羅2018、2019、2020-JP</li>
                <li>
                  全てのカテゴリーを実施（過去の森羅プロジェクトでは81カテゴリーのみ）
                </li>
              </ul>
            </li>
            <li>
              <strong>ステップ3（リンクの紐づけ）</strong>
              <ul>
                <li>日本語の属性値に対してリンクを実施：森羅2021-LinkJP</li>
                <li>7つのカテゴリーに対して</li>
              </ul>
            </li>
          </ul>
          <p>
            これらの、過去の「森羅データ」を教師として利用することで、以下のように(半)自動的に知識を更新し続ける仕組みが実現できると考えています。
          </p>
          <ul>
            <li>森羅2019を教師としてW2021を(半)自動で構造化</li>
            <li>森羅2021を教師としてW2023を(半)自動で構造化</li>
            <li>森羅2023を教師としてW2025を(半)自動で構造化</li>
            <li>…</li>
          </ul>
          <p>
            一方で、End-to-Endタスクの各ステップに焦点を当てたタスクとして以下の３つのサブタスクも開催し、サブタスクのみの参加も歓迎いたします。
          </p>
          <ul>
            <li>分類タスク</li>
            <li>属性値抽出タスク</li>
            <li>リンクタスク</li>
          </ul>
          <p>多くの方のご参加をお待ちしています。</p>
        </ContentBox>
      </div>
      <div
        style={{
          gridArea: "mid-content-right",
          display: "grid",
          rowGap: "1rem",
          gridTemplate: `
            "schedule" max-content
            "contact" max-content
            "related-research" auto
            "committee" max-content
          `,
          maxHeight: `${maxHeight}px`,
        }}
      >
        <ContentBox
          style={{
            gridArea: "schedule",
          }}
          theme="green"
        >
          <h2 id="schedule">スケジュール</h2>
          <ScheduleList
            items={[
              {
                title: "キックオフミーティング＆データ公開",
                time: "2022年5月12日",
              },
              {
                title: "リーダーボードオープン",
                time: "2022年5月12日",
              },
              {
                title: "実行結果の提出締切",
                time: "2022年10月末日（予定）",
              },
              { title: "評価結果の返却", time: "2022年11月中旬" },
              { title: "最終報告会", time: "2022年12月" },
            ]}
          />
          <div
            style={{
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "space-evenly",
              padding: "0 1rem",
            }}
          >
            <NavigationLink href="/join">タスク参加の流れ</NavigationLink>
          </div>
        </ContentBox>
        <ContentBox
          style={{
            gridArea: "contact",
          }}
          theme="green"
        >
          <h2 id="contact">コミュニティ／連絡先</h2>
          <h3>メーリングリスト</h3>
          <p>
            shinra2022-all
            <JoinButton href="https://groups.google.com/g/shinra2022-all">
              参加リンク
            </JoinButton>
          </p>
          <h3>Slack</h3>
          <p>
            森羅2022：Wikipedia構造化プロジェクト(shinra2022.slack.com)
            <JoinButton href="https://join.slack.com/t/shinra2022/shared_invite/zt-14qkpf21i-lQNKlT0aIOU5We7xlZBqfQ">
              参加リンク
            </JoinButton>
          </p>
          <h3>Email（実行委員宛）</h3>
          <p>
            <em>shinra2022-info （at） googlegroups.com</em>
          </p>
        </ContentBox>
        <ContentBox
          style={{
            gridArea: "committee",
          }}
          theme="green"
        >
          <h2 id="committee">実行委員</h2>
          <h3>委員長</h3>
          <CommitteeList items={["関根 聡（理研AIP）"]} />
          <h3>委員</h3>
          <CommitteeList
            items={[
              "野本昌子（理研AIP）",
              "中山功太（理研AIP/筑波大）",
              "隅田飛鳥（理研AIP）",
              "松田耕史（理研AIP/東北大）",
              "後藤美知子（理研AIP）",
              "宇佐美佑（Usami LLC）",
              "安藤まや（フリー）",
              "山田育矢（Studio Ousia/理研AIP）",
              "三浦明波（株式会社アティード）",
              "門脇一真（株式会社日本総合研究所）",
              "阪本浩太郎（株式会社BESNA研究所）",
              "渋木英潔（株式会社BESNA研究所）",
            ]}
          />
        </ContentBox>
        <ContentBox
          style={{
            gridArea: "related-research",
            overflow: "auto",
          }}
          theme="gray"
        >
          <h2 id="related-research">関連研究</h2>
          <h3>森羅プロジェクトに関する研究</h3>
          <SingleLineList items={mainRelatedResearch} divider disablePadding />
          <h3>その他の関連研究</h3>
          <SingleLineList items={otherRelatedResearch} divider disablePadding />
        </ContentBox>
      </div>
      <ContentBox
        style={{
          gridArea: "task-detail",
        }}
        theme="white"
      >
        <h2 id="task-detail">タスク詳細</h2>
        <img
          alt="Categorization1"
          loading="lazy"
          src="/Categorization1.png"
          style={{
            margin: 0,
          }}
        />
        <img
          alt="Categorization2"
          loading="lazy"
          src="/Categorization2.png"
          style={{
            margin: 0,
          }}
        />
        <img
          alt="AttributeExtraction1"
          loading="lazy"
          src="/AttributeExtraction1.png"
          style={{
            margin: 0,
          }}
        />
        <img
          alt="AttributeExtraction2"
          loading="lazy"
          src="/AttributeExtraction2.png"
          style={{
            margin: 0,
          }}
        />
        <img
          alt="Linking1"
          loading="lazy"
          src="/Linking1.png"
          style={{
            margin: 0,
          }}
        />
        <img
          alt="Linking2"
          loading="lazy"
          src="/Linking2.png"
          style={{
            margin: 0,
          }}
        />
      </ContentBox>
      {/* <ContentBox
        style={{
          gridArea: "reference",
        }}
        theme="gray"
      >
        <h2 id="reference">システム制作の参考資料</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gridGap: "2rem",
          }}
        >
          <div>
            <h3>システム制作実況チャンネル</h3>
            <MediaBox width={16} height={9} isYouTube>
              <iframe
                src="https://www.youtube.com/embed/lCYj3x6pu1w"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </MediaBox>
          </div>
          <div>
            <h3>ベースラインシステム等参考システム</h3>
            <p>TBA</p>
          </div>
        </div>
      </ContentBox> */}
      <ContentBox
        style={{
          gridArea: "faq",
        }}
        theme="gray"
      >
        <h2 id="faq">FAQ</h2>
        <p>
          Q. 企業からの参加ですが、必ず発表しなければならないでしょうか？
          <br />
          A. 発表の義務はありません。
        </p>
        <p>
          Q.
          Wikipedia全件を対象にするとのことですが、計算機リソースに不安があります。
          <br />
          A. 計算機リソースなどについては相談に乗ります。Slack(
          <a href="https://join.slack.com/t/shinra2022/shared_invite/zt-14qkpf21i-lQNKlT0aIOU5We7xlZBqfQ">
            招待リンク
          </a>
          )などでお気軽にご相談ください。
        </p>
        <p>
          Q. リーダーボードへの参加は義務ですか？
          <br />
          A. 義務ではありませんが、ぜひご参加ください。
        </p>
      </ContentBox>
      <ContentBox
        style={{
          gridArea: "task-list",
        }}
        theme="gray"
      >
        <h2 id="task-list">過去の共有タスク</h2>
        <ul>
          <li>
            <strong>
              <a href="http://shinra-project.info/shinra2021ml/?lang=en">
                SHINRA2021-MLタスク
              </a>
            </strong>
            <ul>
              <li>
                30言語のWikipediaページを拡張固有表現に分類するタスクです。SHINRA2020-MLの継続で、さらなる精度向上を目指します。
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <a href="http://shinra-project.info/shinra2021linkjp/?lang=ja">
                SHINRA2021-LinkJPタスク
              </a>
            </strong>
            <ul>
              <li>
                森羅2021-LinkJPはエンティティーの属性値を該当するWikipediaページに紐づけるタスクです。
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <a href="http://shinra-project.info/shinra2020ml/?lang=ja">
                SHINRA2020-MLタスク
              </a>
            </strong>
            <ul>
              <li>
                30言語のWikipediaを拡張固有表現に分類するタスクです。トレーニングデータは分類された日本語Wikipediaの項目と日本語から各言語への言語間リンクを利用して作成します。日本語からの言語間リンクがないWikipediaページを分類するタスクです。
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <a href="http://shinra-project.info/shinra2020jp/?lang=ja">
                森羅2020-JPタスク
              </a>
            </strong>
            <ul>
              <li>
                森羅2019に対し新たに施設名、イベント名の47種類の拡張固有表現カテゴリーを加えた82種類のカテゴリーについて、Wikipedia記事中の対応する記述部分にアノテーションを行うタスクです。
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <a href="http://shinra-project.info/shinra2019/?lang=ja">
                森羅2019-JPタスク
              </a>
            </strong>
            <ul>
              <li>
                森羅2018に対し新たに組織名、地形名の30種類の拡張固有表現カテゴリーを加えた35種類のカテゴリーについて、Wikipedia記事中の対応する記述部分にアノテーションを行うタスクです。
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <a href="http://shinra-project.info/shinra2018/?lang=ja">
                森羅2018-JPタスク
              </a>
            </strong>
            <ul>
              <li>
                5種類の拡張固有表現カテゴリーについて、それぞれのカテゴリーに分類されたWikipedia記事の文書中から、属性値を抽出する抽出タスクです。
              </li>
            </ul>
          </li>
        </ul>
      </ContentBox>
    </Paper>
  );
};

export default Home;
