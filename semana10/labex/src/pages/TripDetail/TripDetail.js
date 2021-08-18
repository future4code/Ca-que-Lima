import { useProtectedPage } from '../../hooks/useProtectedPage'

function TripDetail() {
  useProtectedPage()
  return (
    <div>
      <p>TripDetail</p>
    </div>
  )
}

export default TripDetail