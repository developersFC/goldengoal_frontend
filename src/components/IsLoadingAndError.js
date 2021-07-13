import { withAuth0 } from '@auth0/auth0-react';

const IsLoadingAndError = (props) => {
  return props.auth0.isLoading ? (
    <div> Loading...</div>
  ) : props.auth0.error ? (
    <div>Oops... {props.auth0.error.message}</div>
  ) : (
    props.children
  );
};

export default withAuth0(IsLoadingAndError);
