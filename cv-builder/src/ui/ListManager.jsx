import Button from "./Button";

const ListManager = ({ items, onAdd, onRemove, renderItem }) => {
  return (
    <div className="list-manager">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {renderItem(item, index)}
          <Button variant="danger" onClick={() => onRemove(index)}>
            Remove
          </Button>
        </div>
      ))}

      <Button onClick={onAdd} className="add-btn">
        Add New
      </Button>
    </div>
  );
};

export default ListManager;
