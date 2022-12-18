import { useMemo, useRef, useState } from "react"
function Filterm() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ""
  }

  return (
    <>
    <span>Anubhav Simple app</span>
    <br></br>
    <label class="custom-field three">
  <input value={query}
        onChange={e => setQuery(e.target.value)}
        type="search" placeholder="&nbsp;"/>
  <span class="placeholder">Search</span>
  <span class="border"></span>
</label>

      <form onSubmit={onSubmit}>

      <label class="custom-field three">
  <input ref={inputRef} type="text" placeholder="&nbsp;"/>
  <span class="placeholder">New Item:</span>
  <span class="border"></span>
</label>
        <button class="button" type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div><button class="button">{item}</button></div>
      ))}
    </>
  )
}

export default Filterm