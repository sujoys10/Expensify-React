import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';

const LogInPage = ({startLogin}) =>(
    <div>
        <button onClick={startLogin}>LOG IN</button>
    </div>
);

//export default connect()(LogInPage);

 const mapDispatchToProps = (dispatch) =>({
    startLogin : () => dispatch(startLogIn())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);
