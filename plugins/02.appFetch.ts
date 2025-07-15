import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack';

export default defineNuxtPlugin(nuxtApp => {
    const baseFetch = $fetch.create({
        baseURL: nuxtApp.$config.public.apiBase,
        async onRequest({ options }) {
            const headers = new Headers(options.headers);
            headers.set('Authorization', `Bearer ${'place token'}`);
            options.headers = headers;
        },
        onRequestError(e) {
            console.error("onRequestError", e);
        },
        onResponseError(e) {
          console.error("onResponseError", e);
          alert("Будет единый DevExtreme dxAlert об ошибке");
        }
    });

    const appFetch = async <T>(
        request: NitroFetchRequest,
        options?: NitroFetchOptions<NitroFetchRequest>
      ) => baseFetch<T>(request, options)
    
      // Добавляем методы для удобства (аналогично axios)
      appFetch.get = <T>(request: NitroFetchRequest, options?: NitroFetchOptions<NitroFetchRequest>) => 
        baseFetch<T>(request, { ...options, method: 'GET' })
    
      appFetch.post = <T>(request: NitroFetchRequest, options?: NitroFetchOptions<NitroFetchRequest>) => 
        baseFetch<T>(request, { ...options, method: 'POST' })
    
      appFetch.put = <T>(request: NitroFetchRequest, options?: NitroFetchOptions<NitroFetchRequest>) => 
        baseFetch<T>(request, { ...options, method: 'PUT' })
    
      appFetch.delete = <T>(request: NitroFetchRequest, options?: NitroFetchOptions<NitroFetchRequest>) => 
        baseFetch<T>(request, { ...options, method: 'DELETE' })
    
      return {
        provide: {
          appFetch,
        }
      }
  })