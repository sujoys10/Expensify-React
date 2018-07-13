import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
      <h1>Info {props.x}</h1>
      <p>The info id : {props.information}</p>   
    </div>
);
const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
          {props.isAdmin && <p>warning warning. landmine is near</p>}
          <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
          <h1>Shakt launda</h1>
          {props.isAuth ? <WrappedComponent {...props} /> : (<p>LogIn please</p>)}       
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} information="the damn fucking details" x="goalzo" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} information="the damn fucking details" x="goalzo" />, document.getElementById('app'));