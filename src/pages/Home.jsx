import "./styles/Pages.css";
import "./styles/Home.css";

export default function Home() {
    return (
        <div className="main">
        <h1 className="page-header">Home</h1>
        <p className="page-intro">Welcome to the Home page</p>
        {/* <p>This app contains</p> */}
        <ul className="home-list">
            <li>Posts</li>
            <li>Comments</li>
            <li>Users</li>
            <li>Albums</li>
            <li>Photos</li>
        </ul>
        </div>
    );
}