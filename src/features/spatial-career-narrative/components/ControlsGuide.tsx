import { EcctrlJoystick } from 'ecctrl'

export function ControlsGuide() {
  return (
    <>
      <aside className="controls-guide" aria-label="Controls guide">
        <p className="controls-guide-title">Controls</p>
        <div className="controls-guide-row">
          <span>Move</span>
          <strong>W A S D</strong>
        </div>
        <div className="controls-guide-row">
          <span>Camera</span>
          <strong>Mouse Drag</strong>
        </div>
        <div className="controls-guide-row">
          <span>Jump</span>
          <strong>Space</strong>
        </div>
        <div className="controls-guide-row">
          <span>Sprint</span>
          <strong>Shift</strong>
        </div>
        {import.meta.env.DEV ? (
          <div className="controls-guide-row controls-guide-row-dev">
            <span>Scene</span>
            <strong>Theatre Studio</strong>
          </div>
        ) : null}
      </aside>
      <EcctrlJoystick />
    </>
  )
}
