import './AnimateBorderCard.css'

export function AnimateBorderCard({ currentSelector, children }) {
  return <li className={`card ${currentSelector}`}>{children}</li>
}
