/*
 * @Author: your name
 * @Date: 2021-08-12 14:18:09
 * @LastEditTime: 2021-08-12 17:24:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\indexDb\index.js
 */
const indexDb = {
  indexedDB: window.indexedDB || window.webkitindexedDB || window.msIndexedDB || window.mozIndexedDB,
  /**
   * @description: 打开数据库
   * @param {*} databaseName 数据库名称
   * @param {*} version 数据库版本
   * @param {*} success 连接成功
   * @param {*} error 连接失败
   * @param {*} onupgradeneeded 升级
   * @return {*}
   */  
  openDB: function (databaseName, version = 1, success, error, onupgradeneeded) {
    let request = this.indexedDB.open(databaseName, version)
    request.onsuccess = function (event) {
      success(event.target.result)
    }
    request.onerror = function (event) {
      error && error(event)
    }
    request.onupgradeneeded = function (event) {
      onupgradeneeded && onupgradeneeded(event.target.result)
    }
  },

  /**
   * @description: 删除库
   * @param {*} dbName 数据库名称
   * @return {*}
   */  
  deleteDB(dbName) {
    return new Promise((resolve, reject) => {
      let deleteQuest = this.indexedDB.deleteDatabase(dbName)
      // 删除错误
      deleteQuest.onerror = function (event) {
        reject(event)
      }
      // 删除成功
      deleteQuest.onsuccess = function (event) {
        resolve(event)
      }
    })
  },

  /**
   * @description: 关闭数据库
   * @param {*} db 数据库
   * @return {*}
   */  
  closeDB: function (db) {
    db.close()
  },

  /**
   * @description: 创建数据库表
   * @param {*} db 数据库名称
   * @param {*} storeName 表名称
   * @param {*} config 配置
   * @param {Array} StoreIndex 索引 [{name: '索引名称', key: '索引属性', unique: false }]
   * @return {*}
   */  
  createStore(db, storeName, config, StoreIndex) {
    if (storeName && !db.objectStoreNames.contains(storeName)) {
      // 配置
      config = config ? config : { autoIncrement: true }
      // 创建表
      let store = db.createObjectStore(storeName, config)
      // 建立索引
      StoreIndex.forEach(element => {
        store.createIndex(element.name, element.key, { unique: element.unique });
      });
    }
  },
  
  /**
   * @description: 建立数据库表的索引
   * @param {*} db
   * @param {*} storeName
   * @param {*} store
   * @param {*} indexName
   * @param {*} keyPath
   * @param {*} unique
   * @return {*}
   */  
  createStoreIndex ({db, storeName, store, indexName, keyPath, unique = false}) {
    store = store || db.transaction([storeName], 'readwrite')
    store.createIndex(indexName, keyPath, { unique })
  },

  /**
   * @description: 清空数据库表
   * @param {*} store
   * @param {*} db
   * @param {*} storeName
   * @return {*}
   */  
  clearStore ({ store, db, storeName } = {}) {
    const storeDel = store || db.transaction([storeName])
    storeDel.clear()
  },

  /**
   * @description: 删除数据库表
   * @param {*} db
   * @param {*} storeName
   * @return {*}
   */  
  deleteStore (db, storeName) {
    db.deleteObjectStore(storeName)
  },
  
  /**
   * @description: 添加数据，add添加新值
   * @param {*} db
   * @param {*} storeName
   * @param {*} data
   * @return {*}
   */  
  addData: function (db, storeName, data) {
    return new Promise((resolve, reject) => {
      let store = db.transaction([storeName], 'readwrite').objectStore(storeName)
      let request = store.add(data)
      request.onerror = function (event) {
        reject(event)
      }
      request.onsuccess = function (event) {
        resolve(event)
      }
    })
  },

  /**
   * @description: 更新旧值
   * @param {*} db
   * @param {*} storeName
   * @param {*} data
   * @param {*} key
   * @return {*}
   */  
  putData: function (db, storeName, data, key) {
    return new Promise((resolve, reject) => {
      let store = db.transaction([storeName], 'readwrite').objectStore(storeName)
      let request = store.put(data, key)
      request.onerror = function (event) {
        reject(event)
      }
      request.onsuccess = function (event) {
        resolve(event)
      }
    })
  },
  /**
   * @description: 删除数据
   * @param {*} db
   * @param {*} storeName
   * @param {*} key
   * @return {*}
   */  
  deleteData: function (db, storeName, key) {
    let store = db.transaction([storeName], 'readwrite').objectStore(storeName)
    store.delete(key)
  },
  /**
   * @description: 清空数据
   * @param {*} db
   * @param {*} storeName
   * @return {*}
   */  
  clearData: function (db, storeName) {
    let store = db.transaction([storeName], 'readwrite').objectStore(storeName)
    store.clear()
  },
  /**
   * @description: 通过key获取数据
   * @param {*} db
   * @param {*} storeName
   * @param {*} indexQuery
   * @return {*}
   */  
  getData: function (db, storeName, indexQuery) {
    return new Promise((resolve, reject) => {
      // 待改进
      let store = db.transaction([storeName], 'readonly').objectStore(storeName)
      let request
      if (indexQuery.all) {
        request = store.getAll(indexQuery.key, indexQuery.limit || 0)
      } else {
        request = store.get(indexQuery.key)
      }
      request.onerror = function (event) {
        reject(event)
      }
      request.onsuccess = function (event) {
        let result = event.target.result
        resolve(result)
      }
    })
  },
  /**
   * @description: 通过索引搜索
   * @param {*} db
   * @param {*} storeName
   * @param {*} indexQuery
   * @return {*}
   */  
  getDataByIndex: function (db, storeName, indexQuery) {
    return new Promise((resolve, reject) => {
      let store = db.transaction([storeName], 'readonly').objectStore(storeName)
      let index = store.index(indexQuery.key)
      let request
      if (indexQuery.all) {
        request = index.getAll(indexQuery.value, indexQuery.limit || 0)
      } else {
        request = index.get(indexQuery.value)
      }
      request.onerror = function (event) {
        const res = event.target.result
        reject(res)
      }
      request.onsuccess = function (event) {
        const res = event.target.result
        resolve(res)
      }
    })
  },
  /**
   * @description: 通过索引搜索主键
   * @param {*} db
   * @param {*} storeName
   * @param {*} indexQuery
   * @return {*}
   */  
  getKeyByIndex: function (db, storeName, indexQuery) {
    return new Promise((resolve, reject) => {
      let store = db.transaction([storeName], 'readonly').objectStore(storeName)
      let index = store.index(indexQuery.key)
      let request
      if (indexQuery.all) {
        request = index.getAllKeys(indexQuery.value)
      } else {
        request = index.getKey(indexQuery.value)
      }
      request.onerror = function (event) {
        // console.error('通过index.getKey获取数据报错')
        reject(event)
      }
      request.onsuccess = function (event) {
        let result = event.target.result
        resolve(result)
      }
    })
  }
}

export default indexDb