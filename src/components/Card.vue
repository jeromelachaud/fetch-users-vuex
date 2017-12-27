<template>
  <div class="card">
    <img class="card__image" :src="user.picture.medium" />
    <div class="card__name">
      {{user.name.first}} {{user.name.last}}
    </div>
    <div class="card__email">
      {{user.email}}
    </div>
    <div class="card__date-joined">
      <strong>Joigned</strong><br />
      {{user.registered}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'user',
  ],
}
</script>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18.75rem;
    height: 14rem;
    margin: .75rem;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: -1px 4px 6px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-align: center;
    line-height: 1.25;
    font-size: 0.85rem;

    &__image {
      border-radius: 50%;
      margin-bottom: .5rem
    }

    &__name {
      font-weight: 800;
    }

    &__email {
      margin-bottom: .5rem
    }

    &__date-joined{
      font-size: .75rem;
      color: #808080;
    }
  }
</style>
