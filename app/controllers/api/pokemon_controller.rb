class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @poke = Pokemon.find(params[:id])
    render :show
  end

  def create
    @poke = Pokemon.new(pokemon_params)
    if @poke.save
      render :show
    else
      flash[:errors] = @poke.errors.full_messages
      # render form
    end
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :image_url, :moves, :poke_type, :items)
  end
end
