command=$1
dir=$2
name=$3

function create_component(){
    if [[ ! -d ./components ]]
    then
      mkdir ./components
    fi
    if [[ ! -d ./components/$2 ]]
    then 
      mkdir ./components/$2
    fi
    if [[ ! -d ./components/$2/$3 ]]
    then 
      mkdir ./components/$2/$3
    fi

    touch ./components/$2/$3/$3.html
    touch ./components/$2/$3/$3.scss
}

case $command in
  create_component)
    create_component components $2 $3
  ;;
  create_page)
    if [[ ! -d ./pages ]]
    then
        mkdir ./pages
    fi
    create_component "./pages" $2
  ;;
  *)
    echo "No existe el comando"
  ;;
esac