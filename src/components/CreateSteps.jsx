const steps = [
  { num: 1, label: 'Upload Asset', sub: 'Add your file' },
  { num: 2, label: 'Add Details', sub: 'Name, description, links' },
  { num: 3, label: 'Properties', sub: 'Attributes and traits' },
  { num: 4, label: 'Review & Mint', sub: 'Confirm and create' },
];

export default function CreateSteps({ current }) {
  return (
    <div className="create-steps">
      {steps.map((s) => (
        <div key={s.num} className={`create-step ${s.num === current ? 'active' : ''} ${s.num < current ? 'done' : ''}`}>
          <span className="create-step-circle">{s.num}</span>
          <div>
            <div className="create-step-label">{s.label}</div>
            <div className="create-step-sub">{s.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}