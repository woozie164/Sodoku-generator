// Generate number between start and end
// start <= x < end
function RandomRange(start, end) {
	return Math.floor(Math.random() * end) + start;
}

function GenerateBoard(size, numFilledNumbers) {
	var board = [];
	board.length = size;
	
	for(var i = 0; i < size; i++) {
		var column = [];
		column.length = size;		
		for(var j = 0; j < size; j++) {
			column[j] = " ";
		}
		
		board[i] = column;			
	}

	while(true) 
	{
		for(var i = 0; i < numFilledNumbers; i++) {		
			var row = RandomRange(0, 4);
			var col = RandomRange(0, 4);
			
			var column = board[row];
			
			// Pick another cell if this one is filled already
			if(column[col] != " ") {
				i--;
				continue;
			}
			
			column[col] = "" + RandomRange(1, size);		
		}
		
		if(IsValid(board))
			break;
	}
	return board;
}

// This function checks if the board given is valid. 
// Each row and column should have at most one of each number
// and each square should have at most one of each number
function IsValid(board) {
	
	// Check each column
	for(var i = 0; i < board.length; i++) {
		var column = board[i];	
		var table = {};
		for(var j = 0; j < column.length; j++) {
			var num = column[j];
			
			if(num != " " && table[num])
				return false;
			table[num] = 1;
		}
	}
	
	
	// Check each row
	for(var j = 0; j < board.length; j++) {
		table = {}
		for(var i = 0; i < board.length; i++) {
			var column = board[i];
			var num = column[j];
		
			if(num != " " && table[num])
				return false;
			table[num] = 1;
		}
	}	
	
	table = {}
	// Check each square
	/*
	squareSize = Math.floor(Math.sqrt(board.length));
	for(var i = 1; i < 8; i += 3) {
		for(var j = 1; j < 8 += 3) {
			if(!ValidGrid(board, i, j))
				return false;
		}
	}
	*/
	
	return true;
}

function PrintBoard(board) {
	console.log(board)
}

var board = GenerateBoard(4, 4, 6);
PrintBoard(board);
