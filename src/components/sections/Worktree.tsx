export function Worktree() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-primary-dark/60 mb-4">// GIT WORKTREE ISOLATION</p>
            <h2 className="text-h2 mb-6">No more branch conflicts</h2>
            <p className="text-lg text-text-body mb-6">
              Every ticket pipeline runs in its own isolated git worktree. This means:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-mono font-medium">1</span>
                </span>
                <div>
                  <p className="font-medium">Work on multiple tickets simultaneously</p>
                  <p className="text-text-muted">Each gets its own branch and working directory</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-mono font-medium">2</span>
                </span>
                <div>
                  <p className="font-medium">No file conflicts or race conditions</p>
                  <p className="text-text-muted">Agents can edit the same files in different tickets</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-mono font-medium">3</span>
                </span>
                <div>
                  <p className="font-medium">Auto-cleanup after PR merge</p>
                  <p className="text-text-muted">Worktrees are removed automatically via webhook</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary-dark rounded-2xl p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-error"></span>
              <span className="w-3 h-3 rounded-full bg-warning"></span>
              <span className="w-3 h-3 rounded-full bg-success"></span>
              <span className="text-white/50 ml-2">terminal</span>
            </div>
            <div className="text-white/90 space-y-2">
              <p><span className="text-primary">$</span> ls biagent-worktrees/</p>
              <p className="text-white/60">PROJ-123/  PROJ-124/  PROJ-125/</p>
              <p className="mt-4"><span className="text-primary">$</span> git worktree list</p>
              <p className="text-white/60">/main                   abc1234 [main]</p>
              <p className="text-white/60">/biagent-worktrees/PROJ-123  def5678 [biagent/PROJ-123]</p>
              <p className="text-white/60">/biagent-worktrees/PROJ-124  ghi9012 [biagent/PROJ-124]</p>
              <p className="text-white/60">/biagent-worktrees/PROJ-125  jkl3456 [biagent/PROJ-125]</p>
              <p className="mt-4 text-success">✓ 3 tickets running in parallel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
