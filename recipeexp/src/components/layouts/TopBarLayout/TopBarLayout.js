import Header from "../../generic/Header";

function TopBarLayout({children}){
  return <div className="bg-amber-100 h-screen w-full">
    <Header/>
    {children}
  </div>
}
export default TopBarLayout;