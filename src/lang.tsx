import { makeObservable, observable } from 'mobx';

const en = {
    firstName: 'Masaki',
    lastName: 'Asanuma',
    // status: 'Seeking entry positions for early 2023',

    about: 'About',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',

    welcome: 'Hello 👋',
    aboutme: 'I\'m Masaki, and I am currently working as a Software Engineer at Amazon Japan. I was born and raised in South Bay area and graduated from Georgia Tech with a Bachelor\'s in Computer Science. I am a huge coffee nerd, an impulsive guitar buyer, and someone who will never decline an invitation to karaoke. Welcome to my page!',

    sde: 'Software Development Engineer',
    tokyoMeguro: 'Tokyo, Japan',
    amazonFullDesc: 'Currently working within the JP Manga team, developing distributed systems powered by AWS to deliver a seamless experience of discovering & purchasing Manga for Amazon customers. Previously worked in the Points loyalty program team, where I delivered a transaction management system and an automated payment workflow to enable third-party loyalty reward (NTT d POINTs) to be earned on Amazon.',

    sdeIntern: 'Software Development Engineer Intern',
    amazon: 'Amazon',
    seattle: 'Seattle, WA',
    amazonDesc: 'Intern in the High Velocity Events Landing Page team, developed a fully-customizable & production-ready frontend carousel component to be displayed to customers across 25 countries during high velocity events (200M+ traffic) such as Prime Day, Black Friday, and Cyber Monday.',
    amznDetail1: 'Implemented customizability for carousel styling, content, layout, and animations to adapt to any business needs.',
    amznDetail2: 'Ensured production quality & robustness through unit tests, E2E tests, and metrics dashboards & alarms.',
    amznDetail3: 'Created responsive design for supporting desktop, tablet, and mobile devices.',
    amznDetail4: 'Integrated localized strings to support all languages supported by Amazon.',

    se: 'Software Engineer Intern',
    kit: 'KPMG Ignition Tokyo',
    tokyoChiyoda: 'Tokyo, Japan',
    kitDesc: 'Frontend, Backend, & Core logic dev for 2 applications/projects aimed to be utilized by KPMG Japan employees for automating/supporting their auditing, accounting, and risk management tasks.',
    docuSearch: 'Document Search Service (Mar - Jul)',
    docuDesc1: 'Developed both the frontend (React Hooks, TypeScript) and backend (Python Django, PostgresSQL) of the first phase of a document search service web application utilized by KPMG Japan auditors.',
    docuDesc2: 'Implemented a content management portal where admin users can add, edit, delete, and track the visibility of audit documents that the end-users can search through the engine.',
    docuDesc3: 'Participated in agile workflow meetings including sprint planning, retrospective, and estimation planning.',
    docuDesc4: 'Designed PostgresSQL tables for the different types of audit documents available for search.',
    docuDesc5: 'Conducted integration tests for the frontend using Cypress.',
    docuDesc6: 'Utilized MobX 6 for frontend global state management and styled-components for adding CSS styling.',
    vouch: 'Audit Vouching Automation (Jan - Mar)',
    vouchDesc1: 'Developed the core logic & backend of a python package that automates vouching tasks performed by KPMG Japan auditors.',
    vouchDesc2: 'Implemented validation, prediction, and mapping functionality for excel inputs using pandas.',

    ukg: 'UKG (Ultimate Kronos Group)',
    remote: 'Remote, Virtual',
    ukgDesc: 'DevOps/SRE role within the Date Warehousing team, automating build & deployment of various applications/services using TeamCity pipelines and Bash & PowerShell scripts.',
    details: 'More Details',
    detail1: 'Developed and maintained CI/CD pipelines on TeamCity, reducing the deployment time of Data Warehousing services from +5 hours to ~1 hour and increasing the pipeline success rate by 30-40%.',
    detail2: 'Boosted the efficiency of acceptance testing & analysis by implementing an automated weekly creation of a fully configured sandbox environment containing Microsoft SQL databases, MongoDB, RabbitMQ, .NET applications on Kubernetes, and virtual machines.',
    detail3: 'Improved the portability & accessibility of company databases by creating an automated dockerization process for Microsoft SQL databases.',
    detail4: 'Enhanced the code quality of company databases by generating static analysis reports and developing re-runnable automated build, promote, and deploy pipelines using Redgate Deploy.',

    gt: 'Georgia Insitute of Technology',
    bscs: 'Bachelors of Science in Computer Science',
    atl: 'Atlanta, Georgia',
    gtDesc: 'Specializing in Information Internetworks & Media, focusing on studying networks and computer graphics.',
    relCourse: 'Relevant Coursework',
    course1: 'Data Structures & Algorithms (Fundamental data structures & algorithms)',
    course2: 'Design & Analysis of Algorithms (Dynamic programming, divide & conquer, graph algorithms, NP-complete, RSA encryption)',
    course3: 'Introduction to Software Engineering (SDLC concepts including requirements gathering, project planning, architecture diagrams)',
    course4: 'Objects & Design (Software design principles such as SOLID & GRASP)',
    course5: 'Introduction to Databases (Querying using SQL, designing & creating databases)',
    course6: 'Computer Networking (Fundamental network concepts & protocols)',
    course7: 'Object-Oriented Programming (Intro java course)',
    course8: 'Computer Organization & Programming (Intro comptuer architecture with Assembly & C)',
    course9: 'Systems & Networks (OS concepts including processor design, pipelines, memory, scheduling, and networking)',
    course10: 'Computer Graphics (Intro graphics course)',
    course11: 'Privacy Tech Policy Law (In-depth view into privacy in the tech field, dissected privacy policies and conducted privacy impact assessments)',
    course12: 'Computer Audio (Project-based intro audio programming course using Processing and Beads)',
    course13: 'Info Visualization (Intro InfoViz course using D3.js)',
    activities: 'Activities',
    actDesc: 'Snare Drummer at Yellow Jackets Marching Band, IT Support Assistant within College of Computing',

    south: 'South High School',
    highSchool: 'High School Diploma',
    torrance: 'Torrance, California',
    southDesc: 'Developed my interest for software development & engineering primarily through AP Computer Science, Robotics, and working as a CS tutor/teacher.',
    act1: 'President at FRC Team 1197, primarily focused on robot software.',
    act2: 'Drum Captain at Spartans Marching Band, performed as a snare drummer.',

    infoviz: 'Transportation Fatalities Viz',
    infovizDesc: 'A simple visualization exploring the progression of transportation fatalities across 5 different modes (Car, Pedestrian, Motorcycle, Bicycle, Truck) from 1975 to 2020.',
    neocirc: 'NeoCirc',
    neocircDesc: 'Educational platform for teaching Doctors, Nurses, and Parents about neonatal circumcision. Developed in a team of 5 for Georgia Tech Capstone class.',
    portfolio: 'Portfolio',
    portDesc: 'The website that you are on right now! After gaining React experience during my internship at KPMG, I decided to rebuild my portfolio site utilizing my frontend skills that I developed throughout the internship.',
    githubRepo: 'GitHub Repo',
    rayTracer: 'Ray Tracer',
    rayDesc: 'A ray tracing renderer using three.js that renders spheres and disks illuminated by a light source. Supports area lights, distribution ray tracing, reflection, and soft shadows.',
    mts: 'Mass Transit Simulation Application',
    mtsDesc: 'A discrete-event simulation that allows buses to travel along different routes while transporting riders to travel along different routes while transporting riders to different stops.',
    classProject: 'Class Project',
    unfortunately: 'Unfortunately...',
    unfortDesc: 'This was for a class project so the code & app is within Georgia Tech private Github repository.',
    zapPay: 'Zap Pay',
    zapPayDesc: 'For HackGT 2019, my team created a mobile application and an iMessage extension that provides a secure peer-to-peer banking experience. Inspired from platforms like Venmo and Apple Pay, we explored new ways to make easy, quick, and secure transfers.',
    devPost: 'Devpost',
    rgb: 'RGB Color Guessing Game',
    rgbDesc: 'A simple web-based game where the user guesses the color based on the given RGB. With two difficulties to play with, this game will test your perception of color through the RGB system!',

    languages: 'Languages',
    technologies: 'Technologies',
    tools: 'Tools',
    os: 'Operating Systems',
    skillsDesc: 'Here are the programming languages, technologies, tools, & operating systems that I have used throughout my career. Some skills I am more comfortable/proficient than others, but I have been exposed to all the listed tech and I am confident that I can quickly refresh my knowledge about it. Always expanding & willing to learn new cool stuff to use in projects!',

    contentMgLeft: '100px',
};

const jp = {
    firstName: '浅沼',
    lastName: '真樹',
    // status: '2023年始のエンジニア職を探し中',

    about: '自己紹介',
    experience: '職歴',
    education: '学歴',
    projects: 'プロジェクト',
    skills: '技術',

    welcome: 'ようこそ 👋',
    aboutme: '初めまして！浅沼真樹と申します。現在アマゾンジャパンでソフトウェア開発エンジニアとして働いています。南カルフォルニアで生まれ育ち、ジョージア工科大学でコンピューターサイエンスを専門にして2022年12月に卒業しました。休日にはギター・コーヒー・読書・ゲーム・一人カラオケなど様々な趣味に没頭しています！',

    sde: 'ソフトウェア開発エンジニア',
    tokyoMeguro: '東京都目黒区',
    amazonFullDesc: '現在はマンガチームにてAWSを活用したサービス開発に従事し、Amazonをご利用のお客様により楽しく円滑なマンガの発見・購入が行えるサービスを提供しています。以前はポイントチームでドコモとの協業プロジェクトに取り組み、dポイントをAmazonで貯められる機能を開発しました。',

    sdeIntern: 'ソフトウェア エンジニア インターン',
    amazon: 'Amazon',
    seattle: 'シアトル、ワシントン州',
    amazonDesc: 'プライムデー・ブラックフライデー・サイバーマンデーなどの高トラフィックイベントのランディングページに表示される全面カスタマイズ可能のカルーセルUIを開発しました。',
    amznDetail1: '設計や内容のカスタマイズ機能を開発',
    amznDetail2: 'ユニットとE2Eテスト、メトリックダッシュボードとアラームを活用し高品質な作り',
    amznDetail3: 'タブレット＆モバイルサポートの開発',
    amznDetail4: '25各国対応するための自動通訳Stringの統合',

    se: 'ソフトウェア エンジニア インターン',
    kit: '株式会社KPMG Ignition Tokyo',
    tokyoChiyoda: '東京都千代田区',
    kitDesc: 'あずさ監査法人の監査デジタルトランスフォーメーションの為に活用された証憑突合作業の自動化ツールと書類検索&管理ウェブアプリの開発に取り組んでいました。フロントエンドはReact.jsとTypeScriptを利用し、バックエンドはPythonとDjangoを使用しました。',
    docuSearch: '書類検索&管理ウェブアプリ (詳細)',
    docuDesc1: '第一段階の監査書類検索＆管理ウェブアプリのフロントエンド(React Hooks, TypeScript)とバックエンド(Python Django, PostgresSQL)を開発',
    docuDesc2: 'アドミンユーザーがエンドユーザーに展示される監査書類を追加/編集/削除/追跡できる画面を開発',
    docuDesc3: 'スプリントプランニングや推定検定などのアジャイル開発用の会議に参加',
    docuDesc4: '様々な種類の監査書類のPostgresSQLテーブルをデザイン',
    docuDesc5: 'Cypressを利用してフロントエンドの総合テストを実行',
    docuDesc6: '状態管理はMobXを利用し、CSSスタイリングはstyled-componentsを利用',
    vouch: '証憑突合作業の自動化ツール (詳細)',
    vouchDesc1: '自動化ツール用のPythonパッケージのバックエンドとロジックを開発',
    vouchDesc2: 'Pandasを利用してエクセルファイルの検証/予測/マッピング機能を開発',

    ukg: 'UKG (Ultimate Kronos Group)',
    remote: 'リモート、バーチャル',
    ukgDesc: 'データウェアハウス部のサイト信頼性エンジニアとして継続的インテグレーションの自動化システムを開発しました。PowerShellやBashスクリプトを書き、TeamCity環境内で利用してデータウェアハウスアプリやサービス達ののビルド＆デプロイを自動化しました。',
    details: '詳細',
    detail1: 'CI/CDパイプライン開発によってデータウェアハウス用のマイクロサービスのデプロイ時間を５時間から１時間に減少しパイプライン成功率を30-40%増加',
    detail2: '検収試験の効率を上げるため、データウェアハウス部の様々なマイクロサービスを含めた完全構成済みのサンドボックス作成を自動化',
    detail3: 'Dockerを利用してMicrosoft SQLデータベースの自動コンテナライズシステムを開発',
    detail4: 'データベース用の自動ビルド＆デプロイパイプラインと静的コード解析作成を開発',

    gt: 'ジョージア工科大学',
    bscs: 'コンピューターサイエンス理学士',
    atl: 'アトランタ、ジョージア州',
    gtDesc: 'コンピューターネットワークとグラフィックス専門',
    relCourse: '講座一覧',
    course1: 'データ構造とアルゴリズム',
    course2: 'アルゴリズムの分析とデザイン',
    course3: 'ソフトウェアエンジニアリング',
    course4: 'オブジェクト＆デザイン',
    course5: 'データベース',
    course6: 'コンピューターネットワーキング',
    course7: 'オブジェクト指向プログラミング',
    course8: 'コンピューター構造',
    course9: 'オペレーティングシステム',
    course10: 'コンピューターグラフィックス',
    course11: 'プライバシー',
    course12: 'コンピューター音声',
    course13: 'データ可視化',
    activities: '部活',
    actDesc: 'マーチングバンド、ドラムライン、ITサポートのバイト',

    south: 'サウスハイスクール',
    highSchool: 'ハイスクールディプロマ',
    torrance: 'トーランス、カルフォルニア州',
    southDesc: 'ロボット部やAPコンピューターサイエンスがきっかけでソフトウェア開発への興味を持つようになりました。',
    act1: 'ロボット部FRC Team 1197の部長',
    act2: 'マーチングバンドのドラムラインリーダー',

    infoviz: '交通事故統計の可視化ツール',
    infovizDesc: '様々な交通手段の事故死亡確率を1975年から2020年の間にどう進行しているかを比較する可視化ツール。',
    neocirc: 'NeoCirc',
    neocircDesc: '医者や親が新生児の割礼を学ぶための教育プラットフォーム。',
    portfolio: 'ポートフォリオ',
    portDesc: '今あなたが見ているサイトです！インターンシップから得たReact.jsの知識を利用して開発した履歴書サイトです。',
    githubRepo: 'GitHubリポジトリ',
    rayTracer: 'レイ・トレーサー',
    rayDesc: 'レイトレーシングを活用したレンダラー。光の光学的振る舞いをシミュレートしたウェブアプリ。',
    mts: 'マス・トランジット・アプリケーション',
    mtsDesc: 'バス事業者が分析を行うために作られたバス交通をシミュレートした離散イベントシミュレーションアプリ。',
    classProject: 'クラスプロジェクト',
    unfortunately: '残念ながら。。。',
    unfortDesc: 'クラスプロジェクトだったので、このアプリはジョージア工科大学内のリポジトリに保存してあります。',
    zapPay: 'ザップ・ペイ',
    zapPayDesc: '2019年ジョージア工科大学のハッカソンで開発した安全で簡単にお金のデジタル移行を行うことができるモバイルアプリ。',
    devPost: 'Devpost',
    rgb: 'RGB色推測ゲーム',
    rgbDesc: '表示されたRGB値を画面に置かれた色と合わせるシンプルなウェブゲーム。',

    languages: '言語',
    technologies: 'テクノロジー',
    tools: 'ツール',
    os: 'オペレーティングシステム',
    skillsDesc: '今までプロジェクトやインターンシップで取得したプログラミング言語やテクノロジーなどのリストです。いつでも新しい技術を身につけたいので使った事のない技術スタックでも素早く習う自信があります！',

    contentMgLeft: '120px',
};

class Lang {
    lang: any;
    val: string;
    constructor() {
        makeObservable(this, {
            lang: observable,
        })
        this.lang = en;
        this.val = 'en';
    }

    getLang() {
        return this.lang;
    }

    setLang(value: string) {
        if (value === 'jp') {
            this.lang = jp;
            this.val = 'jp';
        } else {
            this.lang = en;
            this.val = 'en';
        }
    }

    getCurrLang() {
        return this.val;
    }
}

const LangState = new Lang();

export { LangState };