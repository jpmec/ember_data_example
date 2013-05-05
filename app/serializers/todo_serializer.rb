class TodoSerializer < ActiveModel::Serializer
  attributes :id,
             :who,
             :what,
             :when,
             :where,
             :how,
             :notes,
             :status
end
