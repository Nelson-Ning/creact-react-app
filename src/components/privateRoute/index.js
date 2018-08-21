import React, {
    Component
} from 'react';
import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
class privateRoute extends Component {
    constructor(props) {
        super(props);
    }
 
    fakeAuth = () => {
        // 自己添加验证是否有权限逻辑 无权限return false
        return true;
    }
 
    render() {
        let {
            component,
            ...rest
        } = {
            component: this.props.component,
            ...this.props
        }
        let Component = this.props.component;
        return (
            <div>
              <Route
                    {...rest}
                    render={props =>
                      this.fakeAuth() ? (
                    <Component {...props} />
                     )  : (
                        <Redirect
                          to={{
                            pathname: "/",
                          }}
                        />
                      )
                    }
                />
            </div>
        )
    }
}
export default withRouter(privateRoute);