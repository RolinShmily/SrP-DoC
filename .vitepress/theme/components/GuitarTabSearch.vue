<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const searchQuery = ref('')
const headings = ref<{ title: string, id: string, bv: string }[]>([])

onMounted(() => {
  // 获取页面所有 h2 标题
  const h2Elements = document.querySelectorAll('.VPDoc h2')
  headings.value = Array.from(h2Elements).map(el => {
    // 查找该标题下方的链接，提取 BV 号
    let bv = ''
    let nextElement = el.nextElementSibling
    while (nextElement) {
      const links = nextElement.querySelectorAll('a[href*="bilibili.com/video"]')
      for (const link of links) {
        const href = link.getAttribute('href') || ''
        const text = link.textContent || ''
        // 从 URL 或文本中提取 BV 号
        const bvMatch = href.match(/BV[\w]+/) || text.match(/BV[\w]+/)
        if (bvMatch) {
          bv = bvMatch[0]
          break
        }
      }
      if (bv) break
      nextElement = nextElement.nextElementSibling
    }

    return {
      title: el.textContent || '',
      id: el.id,
      bv
    }
  })
})

const filteredHeadings = computed(() => {
  if (!searchQuery.value.trim()) return []
  const query = searchQuery.value.toLowerCase()
  return headings.value.filter(h =>
    h.title.toLowerCase().includes(query) || h.bv.toLowerCase().includes(query)
  )
})

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    // 使用 scrollIntoView 配合 scroll-margin-top CSS
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // 更新 URL hash（不触发页面跳转）
    history.replaceState(null, '', `#${id}`)
  }
  searchQuery.value = ''
}

const handleEnterKey = () => {
  if (filteredHeadings.value.length > 0) {
    scrollToHeading(filteredHeadings.value[0].id)
  }
}
</script>

<template>
  <div class="guitar-tab-search">
    <div class="search-input-wrapper">
      <input
        v-model="searchQuery"
        placeholder="搜索歌曲 | 名称或视频BV号"
        @keyup.enter="handleEnterKey"
      />
      <button v-if="searchQuery" @click="searchQuery = ''" class="clear-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div v-if="searchQuery && filteredHeadings.length === 0" class="no-results">
      未找到匹配的歌曲
    </div>

    <div v-else-if="filteredHeadings.length > 0" class="results">
      <div
        v-for="heading in filteredHeadings"
        :key="heading.id"
        class="result-item"
        @click="scrollToHeading(heading.id)"
      >
        <div class="result-title">{{ heading.title }}</div>
        <div v-if="heading.bv" class="result-bv">{{ heading.bv }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guitar-tab-search {
  margin: 24px 0;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input-wrapper input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 14px;
  color: var(--vp-c-text-1);
  outline: none;
  transition: all 0.2s;
  text-align: center;
}

.search-input-wrapper input:focus {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg);
}

.search-input-wrapper input::placeholder {
  color: var(--vp-c-text-2);
}

.clear-btn {
  position: absolute;
  right: 12px;
  padding: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-btn:hover {
  color: var(--vp-c-text-1);
}

.results {
  margin-top: 8px;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.result-item {
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 14px;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
}

.result-item:last-child {
  border-bottom: none;
}

.result-item:hover {
  background: var(--vp-c-bg-soft);
}

.result-title {
  font-weight: 500;
}

.result-bv {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 4px;
  font-family: monospace;
}

.no-results {
  margin-top: 8px;
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
}
</style>

<style>
/* 为页面 h2 标题添加滚动偏移，避免被导航栏遮挡 */
.VPDoc h2 {
  scroll-margin-top: 150px;
}
</style>
