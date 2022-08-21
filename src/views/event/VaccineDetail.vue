<template>
  <div class="row">
    <table>
      <tr>
        <th>DOSE NO.</th>
        <th>TYPE</th>
        <th>DATE</th>
      </tr>
      <tr v-for="vaccine in vaccines.details" :key="vaccine">
        <td>{{ vaccine.number }}</td>
        <td>{{ vaccine.type }}</td>
        <td>{{ vaccine.date }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: ['vaccines']
}
</script>
