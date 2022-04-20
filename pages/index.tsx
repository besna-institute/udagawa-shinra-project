/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { NavigationLink, NewsList } from "../components";
import { Box, Paper, CardContent, CardMedia, Card } from "@mui/material";

const newsItems = [
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

const Home: NextPage = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 2fr) minmax(0, 2fr) minmax(0, 3fr)",
        gridGap: "1rem",
      }}
    >
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "1 / span 1",
        }}
      >
        <CardContent>
          <h2>森羅プロジェクトとは?</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        <CardContent>
          <h2>プロジェクト紹介動画</h2>
        </CardContent>
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/lCYj3x6pu1w"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Card>
      <Card
        sx={{
          gridColumn: "2 / span 1",
          gridRow: "2 / span 1",
        }}
      >
        <CardContent>
          <h2 id="schedule">スケジュール</h2>
          <p>
            キックオフミーティング＆データ公開: 2022年4月下旬～5月中旬
            <br />
            リーダーボードオープン: 2022年5月中旬（予定）
            <br />
            実行結果の提出締切: 2022年10月末日（予定）
            <br />
            評価結果の返却: 2022年11月中旬
            <br />
            最終報告会: 2022年12月
          </p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "3 / span 1",
        }}
      >
        <CardContent>
          <h2>新着情報</h2>
          <NewsList items={newsItems} />
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "1 / span 2",
        }}
      >
        <CardContent>
          <h2>リーダーボード</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
        <Box
          sx={{
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
        </Box>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "3 / span 1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "space-evenly",
            padding: "1rem",
          }}
        >
          <NavigationLink href="/data-download">
            データダウンロードについて
          </NavigationLink>
          <NavigationLink href="/result-submission">
            結果の提出について
          </NavigationLink>
        </Box>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 2",
          gridRow: "4 / span 2",
        }}
      >
        <CardContent>
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
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "4 / span 1",
        }}
      >
        <CardContent>
          <h2 id="committee">実行委員</h2>
          <span>【委員長】 関根 聡（理研AIP）</span>
          <span>
            【委員】野本昌子（理研AIP）中山功太（理研AIP/筑波大）隅田飛鳥（理研AIP）松田耕史（理研AIP/東北大）後藤美知子（理研AIP）宇佐美佑（Usami
            LLC）安藤まや（フリー）山田育矢（Studio
            Ousia/理研AIP）三浦明波（株式会社アティード）阪本浩太郎（株式会社BESNA研究所）渋木英潔（株式会社BESNA研究所）
          </span>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "3 / span 1",
          gridRow: "5 / span 1",
        }}
      >
        <CardContent>
          <h2 id="contact">コミュニティ／連絡先</h2>
          <ul>
            <li>
              [メーリングリスト]　shinra2022-all　
              <a href="https://groups.google.com/g/shinra2022-all">
                参加リンク
              </a>
            </li>
            <li>
              [Slack]
              森羅2022：Wikipedia構造化プロジェクト(shinra2022.slack.com)　
              <a href="https://join.slack.com/t/shinra2022/shared_invite/zt-14qkpf21i-lQNKlT0aIOU5We7xlZBqfQ">
                参加リンク
              </a>
            </li>
            <li>
              Email（実行委員宛）:
              <em>shinra2022-info （at） googlegroups.com</em>　
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "6 / span 1",
        }}
      >
        <CardContent>
          <h2 id="overview">タスク概要</h2>
          <img
            src="/udagawa-shinra-project/shinra2022-fig1.png"
            alt="shinra2022-fig1"
          />
          <p>
            <a href="http://shinra-project.info/?lang=ja">森羅プロジェクト</a>
            は2017年にスタートしたリソース構築プロジェクトで、人が読むことを想定して書かれたWikipediaの知識を計算機が扱える形に
            <a href="#structuring_wikipedia">構造化</a>
            することを目指し、「協働によるリソース構築（Resource by
            Collaborative
            Contribution（RbCC））」という枠組みで、評価型タスクとリソース構築を同時に進めています。
          </p>
          <img
            src="/udagawa-shinra-project/shinra2022-fig2.png"
            alt="shinra2022-fig2"
          />
          <p>
            日本語構造化タスクは森羅プロジェクトで2018年から実施している日本語Wikipediaを対象とした情報抽出タスクで、今回が4回目となります。
          </p>
          <p>
            森羅2022ではこれまでの森羅プロジェクトのタスクを統合したEnd-to-Endタスクと、その構成要素となる3つのサブタスクを開催し、参加者を募集します。
          </p>
          <p>
            End-to-Endタスクでは、以下の3つのステップを一気に実施することで、分類、属性抽出、リンクの複合タスクを実現し、相乗効果／End-to-Endで精度向上の可能性を探ります。
          </p>
          <img
            src="/udagawa-shinra-project/shinra2022-fig3.png"
            alt="shinra2022-fig3"
          />
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
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "7 / span 1",
        }}
      >
        <CardContent>
          <h2 id="task-detail">タスク詳細</h2>
          <h3 id="end-to-end-task">End-to-Endタスク</h3>
          <h4>教師データ</h4>
          <p>Wikipedia2019の分類データ</p>
          <h4>入力データ</h4>
          <p>Wikipedia2021</p>
          <h4>評価データ</h4>
          <p>Wikipedia2021の属性値抽出データに対するリンク</p>
          <ul>
            <li>81カテゴリー（森羅2018,2019,2020-JPの評価データ）</li>
            <li>90カテゴリー（新規）</li>
          </ul>
          <h3 id="classification-task">分類タスク</h3>
          <h4>教師データ</h4>
          <ul>
            <li>Wikipedia2019の分類データ</li>
            <li>
              Wikipedia2019の属性値抽出データ
              <ul>
                <li>81カテゴリー（森羅2018,2019,2020-JPの教師データ）</li>
                <li>90カテゴリー（新規）</li>
              </ul>
            </li>
            <li>
              Wikipedia2019のリンクデータ
              <ul>
                <li>
                  7カテゴリー x
                  200ページ（森羅2021-LinkJPのサンプルデータ（7カテゴリーx50ページ）を含む）
                </li>
                <li>164カテゴリー x 2ページ（新規）</li>
              </ul>
            </li>
          </ul>
          <h4>入力データ</h4>
          <p>Wikipedia2021</p>
          <h4>評価データ</h4>
          <p>Wikipedia2021の分類済みデータ</p>
          <h3 id="attribute-extraction-task">属性値抽出タスク</h3>
          <h4>教師データ</h4>
          <p>Wikipedia2019の属性値抽出データ</p>
          <ul>
            <li>81カテゴリー（森羅2018,2019,2020-JPの教師データ）</li>
            <li>90カテゴリー（新規）</li>
          </ul>

          <h4>入力データ</h4>
          <p>Wikipedia2021 ／ 分類システム出力データ(baseline)</p>
          <ul>
            <li data-stringify-indent="1" data-stringify-border="0">
              分類システム：TypedKB (
              <a
                target="_blank"
                href="https://github.com/singletongue/TypedKB"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                https://github.com/singletongue/TypedKB
              </a>
              )
            </li>
          </ul>
          <h4>評価データ</h4>
          <p>Wikipedia2021の属性値抽出データ</p>
          <ul>
            <li>81カテゴリー（森羅2018,2019,2020-JPの評価データ）</li>
            <li>90カテゴリー（新規）</li>
          </ul>
          <h3 id="link-task">リンクタスク</h3>
          <h4>サンプルデータ</h4>
          <p>Wikipedia2019のリンクデータ</p>
          <ul>
            <li>
              7カテゴリー x
              200ページ（森羅2021-LinkJPのサンプルデータ（7カテゴリーx50ページ）を含む）
            </li>
            <li>164カテゴリー x 2ページ（新規）</li>
          </ul>
          <h4>入力データ</h4>
          <p>Wikipedia2021 ／ 属性値抽出システム出力データ(baseline)</p>
          <ul>
            <li data-stringify-indent="1" data-stringify-border="0">
              属性値抽出システム：Shinra JP BERT (
              <a
                target="_blank"
                href="https://github.com/aiishii/shinra_jp_bert/tree/master"
                rel="noopener noreferrer"
              >
                https://github.com/aiishii/shinra_jp_bert/tree/master
              </a>
              )
            </li>
          </ul>
          <h4>評価データ</h4>
          <p>Wikipedia2021の属性値抽出データに対するリンク</p>
          <ul>
            <li>81カテゴリー（森羅2018,2019,2020-JPの評価データ）</li>
            <li>90カテゴリー（新規）</li>
          </ul>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "8 / span 1",
        }}
      >
        <CardContent>
          <h2>システム制作の参考資料</h2>
        </CardContent>
        <CardContent>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gridGap: "2rem",
            }}
          >
            <Card>
              <CardContent>
                <h3>システム制作実況チャンネル</h3>
              </CardContent>
              <CardMedia
                component="iframe"
                src="https://www.youtube.com/embed/lCYj3x6pu1w"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
            <Card>
              <CardContent>
                <h3>ベースラインシステム等参考システム</h3>
                <p>概</p>
                <p>要</p>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "9 / span 1",
        }}
      >
        <CardContent>
          <h2>関連研究</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "10 / span 1",
        }}
      >
        <CardContent>
          <h2>タスク参加についてのFAQ</h2>
          <p>
            本タスクに関しご不明な点がありましたら、
            <a href="#contact">連絡先</a>までお問い合わせください。
          </p>
        </CardContent>
      </Card>
      <Card
        sx={{
          gridColumn: "1 / span 3",
          gridRow: "11 / span 1",
        }}
      >
        <CardContent>
          <h2>過去の共有タスク</h2>
          <p>概</p>
          <p>要</p>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Home;
