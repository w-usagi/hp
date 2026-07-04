function Profile() {
  return (
    <div className="container">
        <h1>プロフィール</h1>

      <div className="profile-content">
        <img
          src="w-usagi.svg"
          alt="profile"
          width="150"
          className="profile-image"
        />

        <dl className="profile-info">
            <dt>名前</dt>
            <dd className="name-value">
                <span className="hidden-name">バナナの</span>
                <span className="main-name">白うさぎ</span>
            </dd>
            <dt>出身</dt>
            <dd>日本</dd>
            <dt>目標</dt>
            <dd>松田好花さんに自作ゲームを遊んでもらうこと</dd>
            <dt>その他</dt>
            <dd>アイコンの白うさぎは、伏黒の脱兎がモチーフです...</dd>
        </dl>
      </div>
    </div>
  );
}

export default Profile;