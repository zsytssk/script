import nodeFetch from 'node-fetch';

const query = `query searchFormValue(
    $form_slug: String
    $filters: JSON
    $order_by: [OrderByEntity]
    $limit: Int
    $offset: Int
    $filter_entities: JSON
    $relation: Int
    $full_text_search_keyword: String
  ) {
    searchFormValue(
      form_slug: $form_slug
      filters: $filters
      order_by: $order_by
      offset: $offset
      limit: $limit
      filter_entities: $filter_entities
      relation: $relation
      full_text_search_keyword: $full_text_search_keyword
    ) {
      items
    }
  }`;

const variables = {
    form_slug: 'cd_image_list',
    limit: 3,
    offset: 0,
    order_by: [],
    filter_entities: [],
    filters: {
        workload_id: '47',
        tier_id: 1878,
        tier_name: 'zsy1-alivia2-server',
    },
};

async function main() {
    nodeFetch('https://venus.meetwhale.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
            authorization: 'ww9H2pFPSyi0OW-d3kZHCA',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
        .then((res) => {
            return res.json();
        })
        .then((data: any) => {
            for (const item of data.data.searchFormValue.items) {
                const { branch, creator, version_desc, image_address } = item;
                console.log({ branch, creator, version_desc });
            }
        })
        .catch(() => {
            console.log(`脚本运行错误， 也许你的authorization需要更新`);
        });
}

main();
