class Todo < ActiveRecord::Base
  attr_accessible :who, :what, :where, :where, :why, :how, :notes, :status
end
