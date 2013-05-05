class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :who
      t.string :what
      t.string :where
      t.string :wwhen
      t.string :why
      t.string :how
      t.string :notes
      t.string :status

      t.timestamps
    end
  end
end
