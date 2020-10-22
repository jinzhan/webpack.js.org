(self.webpackChunk=self.webpackChunk||[]).push([[5962],{5962:n=>{n.exports='<p><a href="https://npmjs.com/package/cache-loader"><img src="https://img.shields.io/npm/v/cache-loader.svg" alt="npm"></a> <a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/cache-loader.svg" alt="node"></a> <a href="https://david-dm.org/webpack-contrib/cache-loader"><img src="https://david-dm.org/webpack-contrib/cache-loader.svg" alt="deps"></a> <a href="https://dev.azure.com/webpack-contrib/cache-loader/_build/latest?definitionId=4&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/cache-loader/_apis/build/status/webpack-contrib.cache-loader?branchName=master" alt="tests"></a> <a href="https://codecov.io/gh/webpack-contrib/cache-loader"><img src="https://codecov.io/gh/webpack-contrib/cache-loader/branch/master/graph/badge.svg" alt="coverage"></a> <a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a> <a href="https://packagephobia.now.sh/result?p=cache-loader"><img src="https://packagephobia.now.sh/badge?p=cache-loader" alt="size"></a></p> <p>The <code>cache-loader</code> allow to Caches the result of following loaders on disk (default) or in the database.</p> <h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>To begin, you\'ll need to install <code>cache-loader</code>:</p> <pre><code class="hljs language-console">npm install --save-dev cache-loader\n</code></pre> <p>Add this loader in front of other (expensive) loaders to cache the result on disk.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.ext$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'cache-loader\'</span><span class="token punctuation">,</span> <span class="token operator">...</span>loaders<span class="token punctuation">]</span><span class="token punctuation">,</span>\n        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <blockquote> <p>⚠️ Note that there is an overhead for saving the reading and saving the cache file, so only use this loader to cache expensive loaders.</p> </blockquote> <h2 id="options">Options<a href="#options" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <table> <thead> <tr> <th align="center">Name</th> <th align="center">Type</th> <th align="center">n Default</th> <th align="left">Description</th> </tr> </thead> <tbody> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>cacheContext</code></strong></p><p class="description mobile"><code>{String}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{String}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Allows you to override the default cache context in order to generate the cache relatively to a path. By default it will use absolute paths</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>cacheKey</code></strong></p><p class="description mobile"><code>{Function(options, request) -> {String}}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Function(options, request) -> {String}}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Allows you to override default cache key generator</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>cacheDirectory</code></strong></p><p class="description mobile"><code>{String}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{String}</code></td> <td align="center"><code>findCacheDir({ name: \'cache-loader\' }) or os.tmpdir()</code></td> <td align="left">Provide a cache directory where cache items should be stored (used for default read/write implementation)</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>cacheIdentifier</code></strong></p><p class="description mobile"><code>{String}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{String}</code></td> <td align="center"><code>cache-loader:{version} {process.env.NODE_ENV}</code></td> <td align="left">Provide an invalidation identifier which is used to generate the hashes. You can use it for extra dependencies of loaders (used for default read/write implementation)</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>compare</code></strong></p><p class="description mobile"><code>{Function(stats, dep) -> {Boolean}}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Function(stats, dep) -> {Boolean}}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Allows you to override default comparison function between the cached dependency and the one is being read. Return <code>true</code> to use the cached resource</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>precision</code></strong></p><p class="description mobile"><code>{Number}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Number}</code></td> <td align="center"><code>0</code></td> <td align="left">Round <code>mtime</code> by this number of milliseconds both for <code>stats</code> and <code>dep</code> before passing those params to the comparing function</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>read</code></strong></p><p class="description mobile"><code>{Function(cacheKey, callback) -> {void}}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Function(cacheKey, callback) -> {void}}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Allows you to override default read cache data from file</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>readOnly</code></strong></p><p class="description mobile"><code>{Boolean}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Boolean}</code></td> <td align="center"><code>false</code></td> <td align="left">Allows you to override default value and make the cache read only (useful for some environments where you don\'t want the cache to be updated, only read from it)</td> </tr> <tr> <td align="center"><div class="title"><p>Name</p><p>Type</p><p>n Default</p><p>Description</p></div><div class="content"><p><strong><code>write</code></strong></p><p class="description mobile"><code>{Function(cacheKey, data, callback) -> {void}}</code></p><p></p></div></td> <td align="center" class="description desktop"><code>{Function(cacheKey, data, callback) -> {void}}</code></td> <td align="center"><code>undefined</code></td> <td align="left">Allows you to override default write cache data to file (e.g. Redis, memcached)</td> </tr> </tbody> </table> <h2 id="examples">Examples<a href="#examples" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <h3 id="basic">Basic<a href="#basic" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'cache-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="database-integration">Database Integration<a href="#database-integration" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h3> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token comment">// Or different database client - memcached, mongodb, ...</span>\n<span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'redis\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'crypto\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n<span class="token comment">// connect to client</span>\n<span class="token comment">// ...</span>\n\n<span class="token keyword">const</span> <span class="token constant">BUILD_CACHE_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600</span><span class="token punctuation">;</span> <span class="token comment">// 1 day</span>\n\n<span class="token keyword">function</span> <span class="token function">digest</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> crypto\n    <span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">\'md5\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">\'hex\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Generate own cache key</span>\n<span class="token keyword">function</span> <span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">build:cache:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">digest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Read data from database and parse them</span>\n<span class="token keyword">function</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Key </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> not found</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Write data to database under cacheKey</span>\n<span class="token keyword">function</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> data<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  client<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'EX\'</span><span class="token punctuation">,</span> <span class="token constant">BUILD_CACHE_TIMEOUT</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        use<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token operator">:</span> <span class="token string">\'cache-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              cacheKey<span class="token punctuation">,</span>\n              read<span class="token punctuation">,</span>\n              write<span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p> <p><a href="https://github.com/webpack-contrib/cache-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p> <h2 id="license">License<a href="#license" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a></h2> <p><a href="https://github.com/webpack-contrib/cache-loader/blob/master/LICENSE">MIT</a></p> '}}]);