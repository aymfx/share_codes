/** @type {PagodaServerless} */
const pdServerless = req.$pdServerless;
async function main () {
  const httpQuery = {
    type: "cmsAlipayApplet",
    method: "post",
    url: `https://test-blog-8gna4lys4c563eac-1251605472.ap-shanghai.service.tcloudbase.com/v1/v1.0/users`,
    data: {
      query: query.$and.length > 0 ? query : {}
    }
  };
  const { data: list } = await pdServerless.executeHttp(httpQuery);

  return {
    data: {
      list
    },
    proxyInfo: isProduction(RUNTIME_ENV) ? "" : httpQuery
  };
}

pdServerless.executeMain(main);
