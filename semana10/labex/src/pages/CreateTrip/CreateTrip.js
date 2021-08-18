import { useProtectedPage } from '../../hooks/useProtectedPage'

function CreateTrip() {
  useProtectedPage()
  return (
    <div>
      <p>CreateTrip</p>
    </div>
  )
}

export default CreateTrip