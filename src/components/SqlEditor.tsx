import React from 'react';

export default function SqlEditor() {
  return (
    <section className="py-20 bg-bd-black" id="features">
      <div className="container mx-auto px-6">
        <div className="text-sm text-bd-purple mb-2">Query editor</div>
        <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-bd-text">Powerful SQL editor</h2>
        <p className="text-xl text-bd-text-secondary max-w-2xl mb-12">
          Built on the same framework as VS Code, we've made the best possible multiplayer SQL editor for teammates who want to write their own queries. Auto-formatting, variables, version history, and best-in-class autocompletion.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-bd-card/60 border border-bd-border/50 rounded-lg p-4 overflow-hidden">
            {/* Code editor with line numbers */}
            <div className="font-mono text-sm">
              <div className="flex">
                <div className="text-bd-text-tertiary pr-4 text-right select-none w-8">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                </div>
                <div>
                  <div><span className="text-bd-purple">SELECT</span> series.date,</div>
                  <div className="pl-4"><span className="text-bd-blue">COALESCE</span>(<span className="text-bd-blue">AVG</span>(dock_item_count), 0) <span className="text-bd-purple">AS</span> average_dock_items</div>
                  <div><span className="text-bd-purple">FROM</span> dbo</div>
                  <div className="pl-4"><span className="text-bd-blue">generate_series</span>(<span className="text-bd-yellow">&#123;&#123; startDate &#125;&#125;</span>::date, <span className="text-bd-yellow">&#123;&#123; endDate &#125;&#125;</span>::date)</div>
                  <div><span className="text-bd-purple">LEFT JOIN</span> (</div>
                  <div className="pl-4"><span className="text-bd-purple">SELECT</span></div>
                  <div className="pl-8"><span className="text-bd-text-secondary">"User"."id"</span> <span className="text-bd-purple">AS</span> user_id,</div>
                  <div className="pl-8"><span className="text-bd-blue">date</span>(<span className="text-bd-text-secondary">"DockItem"."createdAt"</span>) <span className="text-bd-purple">AS</span> dock_item_date,</div>
                  <div className="pl-8"><span className="text-bd-blue">COUNT</span>(<span className="text-bd-text-secondary">"DockItem"."id"</span>) <span className="text-bd-purple">AS</span> dock_item_count</div>
                  <div className="pl-4"><span className="text-bd-purple">FROM</span> <span className="text-bd-text-secondary">"User"</span></div>
                  <div className="pl-4"><span className="text-bd-purple">LEFT JOIN</span> <span className="text-bd-text-secondary">"Dock"</span> <span className="text-bd-purple">ON</span> <span className="text-bd-text-secondary">"User"."id"</span> = <span className="text-bd-text-secondary">"Dock"."userId"</span></div>
                  <div className="pl-4"><span className="text-bd-purple">LEFT JOIN</span> <span className="text-bd-text-secondary">"DockItem"</span> <span className="text-bd-purple">ON</span> <span className="text-bd-text-secondary">"Dock"."id"</span> = <span className="text-bd-text-secondary">"DockItem"."dockId"</span></div>
                  <div className="pl-4"><span className="text-bd-purple">GROUP BY</span></div>
                  <div className="pl-8"><span className="text-bd-text-secondary">"User"."id"</span>,</div>
                  <div className="pl-8">dock_item_date</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center gap-4 text-xs text-bd-text-secondary">
                <span>60 FPS</span>
                <span>70MB RAM</span>
                <span>44°C CPU</span>
                <span>18% GPU</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-bd-text">Lightning fast. 60fps.</h3>
            <p className="text-bd-text-secondary">
              Basedash is opinionated software built in pursuit of high-performance. Keyboard-first design it delivers a focused experience ideal for fast-paced development environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}