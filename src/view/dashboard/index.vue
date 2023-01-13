<template>
  <div class="dashboard"> dashboard </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import sha256 from 'crypto-js/sha256';
  import { useGlobSetting } from '/@/hooks/setting';

  const { appId, appSecret } = useGlobSetting();

  function isbnBookNumberQuery(isbn) {
    const timestamp = Date.now().toString();
    const productCode = 'isbn_query';
    const sign = sha256(appId + appSecret + timestamp).toString();
    const uRLSearchParams = new URLSearchParams({ appId, timestamp, isbn, productCode, sign });

    return fetch('https://api.jumdata.com/isbn/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: uRLSearchParams.toString(),
    })
      .then((res) => res.json())
      .then((res) => res.data.details.at(0));
  }

  defineExpose({ isbnBookNumberQuery });

  onMounted(async () => {
    const isbn = '9787115545381';
    const res = await isbnBookNumberQuery(isbn);
    console.log(res);
  });
</script>

<style scoped lang="less"></style>
