

//Avatar component
const Avatar = () => <img src="http://i.pravatar.cc/300"/>;

//Username component
const UserName = () => <h4>janedoe</h4>;

//Bio component
const Bio = () =>
    <p>
      <strong>Bio: </strong>
      Lorem ipsum dolor sit amet, justo a bibendum phasellus proodio
      ligula, sit
    </p>;

// UserProfile component   
const UserProfile = () =>
    <div>
      <Avatar/>
      <UserName/>
      <Bio/>
    </div>;

ReactDOM.render(
    <UserProfile/>,
    document.getElementById('root')
);
view raw
composition.js hosted with ❤ by GitHub
