<template>
  <div class="mb-3 text-muted">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">{{ root }}</li>
        <li class="breadcrumb-item active" aria-current="page">{{ current }}</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: String,
      required: true,
    },
    root: {
      type: String,
      default: "NOI 2023 背笔试",
    },
  },
};
</script>
