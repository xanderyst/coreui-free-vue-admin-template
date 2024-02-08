<template>
  <CRow :xs="{ gutter: 4 }">
    <CCol :sm="6" :xl="4">
      <CWidgetStatsA color="primary">
        <template #value>
          {{ computeStats('totalDeliveries', currentSelectionMap.totalDeliveries.time.value) }}
          <span class="fs-6 fw-normal">
            (25% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Total Deliveries</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              {{ currentSelectionMap.totalDeliveries.time.label }}
              <CIcon icon="cil-options" class="text-white" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem @click="updateSelection('totalDeliveries', 'week')">Last Week</CDropdownItem>
              <CDropdownItem @click="updateSelection('totalDeliveries', 'month')">Last Month</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            ref="widgetChartRef1"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: getStyle('--cui-primary'),
                  data: [68, 59, 84, 84, 51, 55, 40],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :sm="6" :xl="4">
      <CWidgetStatsA color="info">
        <template #value>
          {{ computeTime(computeStats('totalTimeInPod', currentSelectionMap.totalTimeInPod.time.value)) }}
          <span class="fs-6 fw-normal">
            (48% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Total Time in Pod</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
            {{ currentSelectionMap.totalTimeInPod.time.label }}
              <CIcon icon="cil-options" class="text-white" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem @click="updateSelection('totalTimeInPod', 'week')">Last Week</CDropdownItem>
              <CDropdownItem @click="updateSelection('totalTimeInPod', 'month')">Last Month</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            ref="widgetChartRef2"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: getStyle('--cui-info'),
                  data: [1, 18, 9, 17, 34, 22, 11],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: -9,
                  max: 39,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :sm="6" :xl="4">
      <CWidgetStatsA color="warning">
        <template #value
          >{{ computeStats('totalUsers', currentSelectionMap.totalUsers.time.value) }}
          <span class="fs-6 fw-normal">
            (17% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Total Users</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
            {{ currentSelectionMap.totalUsers.time.label }}
              <CIcon icon="cil-options" class="text-white" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem @click="updateSelection('totalUsers', 'week')">Last Week</CDropdownItem>
              <CDropdownItem @click="updateSelection('totalUsers', 'month')">Last Month</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  border: {
                    display: false,
                  },
                  display: false,
                },
                y: {
                  display: false,
                },
              },
              elements: {
                line: {
                  borderWidth: 2,
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { onMounted, ref, reactive, computed } from 'vue'
import { CChart } from '@coreui/vue-chartjs'
import { getStyle } from '@coreui/utils'
import { getPodOnlineStatus } from '../../utils/api'

export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
  setup() {
    const widgetChartRef1 = ref()
    const widgetChartRef2 = ref()

    onMounted(() => {
      document.documentElement.addEventListener('ColorSchemeChange', () => {
        if (widgetChartRef1.value) {
          widgetChartRef1.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-primary')
          widgetChartRef1.value.chart.update()
        }

        if (widgetChartRef2.value) {
          widgetChartRef2.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-info')
          widgetChartRef2.value.chart.update()
        }
      })
    })
    // when there's an actual api, need to set loading states here and use async
    const data = reactive(getPodOnlineStatus());
    console.log('data', data);
    const stats = computed(() => data.stats);
    console.log('stats totalDeliveries', stats.value.totalDeliveries);
    const currentSelectionMap = reactive({
      totalDeliveries: {
        time: {
          label: 'Last week',
          value: 'week'
        }
      },
      totalTimeInPod: {
        time: {
          label: 'Last week',
          value: 'week'
        }
      },
      totalUsers: {
        time: {
          label: 'Last week',
          value: 'week'
        }
      }
    });
    const computeStats = (type, time) => {
      console.log('stats', stats);
      return stats.value[`${type}`][`${time}`];
    }
    const updateSelection = (type, time) => {
      let option = {
        label: `Last ${time}`,
        value: time
      };
      currentSelectionMap[`${type}`].time = option;
      console.log('currentSelectionMap', currentSelectionMap);
    }
    const computeTime = (min) => {
      if (min > 60) {
        return `${Math.round(min/60)} hours ${min%60} min`;
      }
      return `${min} min`
    }

    return { computeTime, currentSelectionMap, updateSelection, computeStats, getStyle, widgetChartRef1, widgetChartRef2 }
  },
}
</script>
