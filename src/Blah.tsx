function TopBanner(saying: any) {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="company logo"></img>
        </div>
        <div className="col align-self-center text-start">
          <h1>{saying.words}</h1>
        </div>
      </div>
    </div>
  );
}
export default TopBanner;
