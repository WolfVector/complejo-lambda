export function Card({ title, value }) {
  return (
    <div className={`${ (value > 28) ? "bg-red-400" : "bg-white" } border border-slate-200 rounded-xl shadow-xl p-4`}>
      <div className='text-xl font-bold'>{ value } °  C</div>
      <div className='mt-6 text-sm font-semibold'>{ title }</div>
    </div>
  )
}

export default Card