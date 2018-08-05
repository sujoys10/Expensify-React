import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';

const LogInPage = ({startLogin}) =>(
    <div className="box-layout">
       <div className="box-layout__box">
           <h1 className="box-layout__title">Expensify</h1>
           <p>sdjfk asknhdjkad</p>
          <button className="button" onClick={startLogin}>Login with Google</button>
       </div>
    </div>
);

//export default connect()(LogInPage);

 const mapDispatchToProps = (dispatch) =>({
    startLogin : () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);
