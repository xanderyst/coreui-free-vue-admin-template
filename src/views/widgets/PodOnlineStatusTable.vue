<template>
    <CCard>
        <CCardHeader>Pod Online Status</CCardHeader>
        <CCardBody>
            <CTable>
            <CTableHead>
                <CTableRow>
                <CTableHeaderCell v-for="location in locations">
                    Location {{ location.name }}
                </CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow v-for="n in maxRowLength">
                <CTableDataCell v-for="location in locations">
                    <v-icon name="bi-circle-fill" :fill="computeStatus(location, n)"/>
                    {{ location.pods[n-1].name }}
                </CTableDataCell>
                </CTableRow>
            </CTableBody>
            </CTable>
        </CCardBody>
    </CCard>
  </template>
  
  <script>
  import { onMounted, ref, computed } from 'vue'
  import { CChart } from '@coreui/vue-chartjs'
  import { getStyle } from '@coreui/utils'
  import { getPodOnlineStatus } from '../../utils/api'
  import { cilCircle } from '@coreui/icons';
  const green = '#00FF00';
  export default {
    name: 'PodOnlineStatusTable',
    components: {
      CChart
    },
    setup() {
      const data = getPodOnlineStatus();
      const locations = computed(() => data.pod.locations);
      const maxRowLength = computed(() => {
        let maxLength = 0;
        data.pod.locations.forEach(location => {
            if (location.pods.length>maxLength) {
                maxLength = location.pods.length;
            }
        });
        return maxLength;
      });
      const computeStatus = (location, index) => {
        if (location.pods[index-1].status) return 'green';
        return 'red';
      }
      return { maxRowLength, data, locations, cilCircle, computeStatus}
    },
  }
  </script>
  