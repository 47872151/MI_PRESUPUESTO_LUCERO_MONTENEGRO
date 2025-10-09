import { useState, useEffect } from 'react'

const STORAGE_KEY = 'movimientos'

export function useMovimientos() {
  const [movimientos, setMovimientos] = useState(() => {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movimientos))
  }, [movimientos])

  const addMovimiento = (mov) => setMovimientos([...movimientos, mov])
  const editMovimiento = (id, updated) =>
    setMovimientos(movimientos.map(m => m.id === id ? { ...m, ...updated } : m))
  const deleteMovimiento = (id) =>
    setMovimientos(movimientos.filter(m => m.id !== id))
  const resetMovimientos = () => setMovimientos([])

  // Filtros y ordenamientos pueden agregarse aquí

  return {
    movimientos,
    addMovimiento,
    editMovimiento,
    deleteMovimiento,
    resetMovimientos,
    setMovimientos,
  }
}
