import asyncComponent from 'SHARED/components/AsyncComponent';

const githubComponent = {
  desktop: asyncComponent(
    () => System.import('SHARED/components/GithubComponent')
      .then(component => component.default)
  ),
  mobile: asyncComponent(
    () => System.import('SHARED/components/GithubMobileComponent')
      .then(component => component.default)
  ),
};

export default (store, options) => {
  const { login, device } = options;
  const GithubComponent = githubComponent[device];
  return {
    path: `/${login}/visualize`,
    component: GithubComponent,
  };
};
